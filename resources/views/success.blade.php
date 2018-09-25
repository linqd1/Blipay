<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8"/>
   <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
   <title>Blipay | Success</title>
  <style>
  html {
   height: 100%;
}

body {
   display: -webkit-box;   /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */
   display: -moz-box;      /* OLD: Firefox (buggy) */
   display: -ms-flexbox;   /* MID: IE 10 */
   display: -webkit-flex;  /* NEW, Chrome 21–28, Safari 6.1+ */
   display: flex;          /* NEW: IE11, Chrome 29+, Opera 12.1+, Firefox 22+ */
   flex-direction: column;
   -webkit-box-align: center; -moz-box-align: center; /* OLD… */
   -ms-flex-align: center; /* You know the drill now… */
   -webkit-align-items: center;
   align-items: center;

   -webkit-box-pack: center; -moz-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;
   justify-content: center;

   margin: 0;
   height: 100%;
   width: 100% /* needed for Firefox */
}

h1 {
   display: -webkit-box; display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;

   -webkit-box-align: center; -moz-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;

   height: 10rem;
}

p {
    display: -webkit-box; display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;

   -webkit-box-align: center; -moz-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;

   font-size: 11px;
}
</style>
</head>
<body>
   <h1>收款成功</h1>
   <p><?php echo $address ?></p>
<script>
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
</script>
</body>
</html>