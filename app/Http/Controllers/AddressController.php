<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class AddressController extends Controller
{
    public function index(Request $request, $address) {
        $response['address'] = $address;

        $result = Storage::get('file.txt');

        $content = 'false';
        Storage::put('file.txt', $content);

        $response['status'] = $result == 'true' ? true : false;

        return response()->json($response);
    }

    public function signal(Request $request, $address) {
        $content = 'true';
        Storage::put('file.txt', $content);

        return view('success', ['address' => $address]);
    }
}
