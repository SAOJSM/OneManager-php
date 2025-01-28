<?php
declare(strict_types=1);

/**
 * OneManager-php
 * 一個基於 PHP 的 OneDrive 檔案管理與分享工具
 */

// 載入必要的檔案
require 'vendor/autoload.php';
require 'conststr.php';
require 'common.php';

// 設定時區
date_default_timezone_set('UTC');

// 檢查必要的 PHP 擴充功能
if (!extension_loaded('curl')) {
    http_response_code(500);
    echo '<font color="red">需要 curl 擴充功能</font>，請安裝 php-curl。';
    exit(1);
}

// 全域變數宣告
global $platform;
$platform = checkPlatform();

/**
 * 檢查運行平台
 * @return string 平台名稱
 */
function checkPlatform(): string {
    if (isset($_ENV["VERCEL_ENV"])) {
        return 'Vercel';
    }
    if (isset($_SERVER['DOCUMENT_ROOT']) && str_starts_with($_SERVER['DOCUMENT_ROOT'], '/home/runner/')) {
        return 'Replit';
    }
    return 'Normal';
}

/**
 * 回寫平台相關環境變數
 * @param string $p 平台名稱
 */
function writebackPlatform(string $p): void {
    // 移除不需要的平台判斷
}

// 根據不同平台載入對應的處理模組
switch ($platform) {
    case 'Vercel':
        // Vercel 平台
        if (getenv('ONEMANAGER_CONFIG_SAVE') === 'env') {
            include 'platform/Vercel_env.php';
        } else {
            include 'platform/Vercel.php';
        }
        $path = getpath();
        $_GET = getGET();
        
        $response = main($path);
        foreach ($response['headers'] as $headerName => $headerVal) {
            header($headerName . ': ' . $headerVal, true);
        }
        http_response_code($response['statusCode']);
        echo $response['isBase64Encoded'] ? base64_decode($response['body']) : $response['body'];
        break;
    case 'Replit':
        // Replit 平台
        include 'platform/Replit.php';
        $path = getpath();
        $_GET = getGET();
        
        $response = main($path);
        foreach ($response['headers'] as $headerName => $headerVal) {
            header($headerName . ': ' . $headerVal, true);
        }
        http_response_code($response['statusCode']);
        echo $response['isBase64Encoded'] ? base64_decode($response['body']) : $response['body'];
        break;
    default:
        // 一般網頁伺服器
        include 'platform/Normal.php';
        $path = getpath();
        $_GET = getGET();
        
        $response = main($path);
        foreach ($response['headers'] as $headerName => $headerVal) {
            header($headerName . ': ' . $headerVal, true);
        }
        http_response_code($response['statusCode']);
        echo $response['isBase64Encoded'] ? base64_decode($response['body']) : $response['body'];
}
