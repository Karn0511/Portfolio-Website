function Sync-Portfolio {
    Write-Host "--- Starting Portfolio OS Auto-Sync ---" -ForegroundColor Cyan
    
    # 1. Stage all changes
    Write-Host "[1/3] Staging changes..." -ForegroundColor Gray
    git add .
    
    # 2. Commit with automated timestamp
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $message = "Auto-update: $timestamp [Portfolio OS Sync]"
    Write-Host "[2/3] Committing: $message" -ForegroundColor Gray
    git commit -m $message
    
    # 3. Push to GitHub
    Write-Host "[3/3] Pushing to GitHub (main branch)..." -ForegroundColor Gray
    git push origin main
    
    Write-Host "--- Sync Complete: System Operational ---" -ForegroundColor Green
}

# Run the sync
Sync-Portfolio
