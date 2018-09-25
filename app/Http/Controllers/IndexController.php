<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use EasyWeChat;

class IndexController extends Controller
{
    public function index() {
        // $app = '';
        $app = EasyWeChat::officialAccount();
        return view('welcome', ['app' => $app]);
    }
}
