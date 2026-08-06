Add-Type -AssemblyName System.Drawing

$srcPath = "d:\portfolio-temp\public\images\profile\pfp-latest.jpg"
$outPng = "d:\portfolio-temp\public\favicon.png"
$outIco = "d:\portfolio-temp\public\favicon.ico"

$srcImg = [System.Drawing.Image]::FromFile($srcPath)
$size = 128

$bmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.Clear([System.Drawing.Color]::Transparent)

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$g.SetClip($path)
$g.DrawImage($srcImg, 0, 0, $size, $size)

$bmp.Save($outPng, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$srcImg.Dispose()

Write-Host "Circular PNG favicon successfully created at $outPng!"
