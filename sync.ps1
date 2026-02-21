function Sync-Portfolio {
    Write-Host "--- Starting Portfolio OS Auto-Sync & Deployment ---" -ForegroundColor Cyan
    
    # 1. Build the project
    Write-Host "[1/5] Building high-performance production bundle..." -ForegroundColor Gray
    npm run build
    if ($LASTEXITCODE -ne 0) { 
        Write-Host "Build failed. Aborting deployment." -ForegroundColor Red
        return 
    }

    # 2. Deploy to Firebase
    Write-Host "[2/5] Deploying to Firebase Hosting..." -ForegroundColor Gray
    firebase deploy --only hosting
    if ($LASTEXITCODE -ne 0) { 
        Write-Host "Deployment failed. Ensure you are logged into Firebase." -ForegroundColor Red
        # We continue to GitHub sync even if deploy fails, so changes aren't lost
    }

    # 3. Stage all changes
    Write-Host "[3/5] Staging changes for version control..." -ForegroundColor Gray
    git add .
    
    # 4. Commit with automated timestamp
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $message = "Auto-Deploy: $timestamp [Portfolio OS Update]"
    Write-Host "[4/5] Committing: $message" -ForegroundColor Gray
    git commit -m $message
    
    # 5. Push to GitHub
    Write-Host "[5/5] Synchronizing GitHub repository..." -ForegroundColor Gray
    git push origin main
    
    Write-Host "--- Sync & Deployment Complete: System Operational ---" -ForegroundColor Green
}

# Run the sync
Sync-Portfolio
