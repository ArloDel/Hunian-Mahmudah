<?php
putenv('APP_ENV=testing');
require 'vendor/autoload.php';
$app = require 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

foreach (['/api/login' => 'POST', '/api/register' => 'POST', '/api/me' => 'GET', '/api/logout' => 'POST'] as $uri => $method) {
    $request = Illuminate\Http\Request::create($uri, $method);
    $request->headers->set('Accept', 'application/json');
    $response = $kernel->handle($request);
    echo "$method $uri => Status: " . $response->getStatusCode() . ", Content: " . substr($response->getContent(), 0, 80) . "\n";
}
