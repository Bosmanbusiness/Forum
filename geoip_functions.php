<?php
require_once 'vendor/autoload.php';
use GeoIp2\Database\Reader;

function getCountryCode($ip) {
    $dbPath = __DIR__ . '/countries/GeoLite2-Country.mmdb';

    if ($ip == '::1') {
        $ip = '212.58.244.22';  // Google's public DNS IP as an example
    }

    if (!file_exists($dbPath)) {
        error_log("GeoIP database file not found: $dbPath");
        return 'unknown';
    }

    try {
        $reader = new Reader($dbPath);
        $record = $reader->country($ip);
        return strtolower($record->country->isoCode);
    } catch (Exception $e) {
        error_log("GeoIP error: " . $e->getMessage());
        return 'unknown';
    }
}