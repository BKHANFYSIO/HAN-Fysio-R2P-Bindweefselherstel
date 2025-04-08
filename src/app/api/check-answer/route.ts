import { NextResponse } from 'next/server';

if (!process.env.AIML_API_KEY) {
  throw new Error('Missing AIML_API_KEY environment variable');
}

export async function POST(req: Request) {
  try {
    const { userAnswer } = await req.json();

    const response = await fetch('https://api.aimlapi.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${process.env.AIML_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": "Je bent een expert op het gebied van fysiotherapie en bindweefselherstel. Je taak is om de uitleg van studenten te beoordelen over mechanotransductie in relatie tot bindweefselherstel. Geef constructieve feedback en suggesties voor verbetering. Beoordeel op: 1) Accuraatheid van de informatie, 2) Volledigheid van de uitleg, 3) Klinische relevantie."
          },
          {
            "role": "user",
            "content": userAnswer
          }
        ],
        "temperature": 0.7,
        "max_tokens": 500,
        "response_format": {
          "type": "text"
        }
      })
    });

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het controleren van je antwoord.' },
      { status: 500 }
    );
  }
} 