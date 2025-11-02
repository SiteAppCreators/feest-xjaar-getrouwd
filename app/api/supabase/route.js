import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../lib/supabaseClient";

export async function POST(req) {
    const { data, error } = await supabaseAdmin.from('names').insert([
        { fullName: 'Test Name' }
    ]).select();
    console.log('Supabase data:', data);
    return new Response(JSON.stringify({ success: data }), { status: 200 });
}