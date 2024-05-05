<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/js/app.js', 'resources/sass/app.scss'])
    <title>{{ config('app.name') }}</title>
</head>
<body>
    <x-nav />

    <main class="container mt-3">
        @yield('content')
    </main>
</body>
</html>
