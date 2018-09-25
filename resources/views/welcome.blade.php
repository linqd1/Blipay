<!-- welcome.blade.php -->

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Blipay</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript" charset="utf-8">
            wx.config(<?php echo $app->jssdk->buildConfig(array('scanQRCode'), false) ?>);
        </script>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>