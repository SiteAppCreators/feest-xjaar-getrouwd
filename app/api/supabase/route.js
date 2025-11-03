import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../lib/supabaseClient";

export async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, data } = body;

        if (fullName) {
            //add the lowercase fullname
            const lowerFullName = fullName.trim().toLowerCase()

            const duplicate = await supabaseAdmin.from('names').select('*').eq('fullName', lowerFullName);
            if (duplicate.data.length > 0) {
                return NextResponse.json({ message: "Deze naam werd al eerder gebruikt. Gelieve een andere naam in te vullen" }, { status: 400 });
            } else {
                const fullPayload = {
                    'fullName': lowerFullName,
                    ...data
                };
                const insertedData = await supabaseAdmin.from('names').insert([fullPayload]).select();
                return NextResponse.json({ message: "Data received successfully" }, { status: 200 });
            }
        }
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ message: "Er is iets verkeerd gegaan, probeer later opnieuw" }, { status: 400 });
    }
}