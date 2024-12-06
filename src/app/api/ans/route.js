import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function POST(req) {
  const { message,threadId } = await req.json();
  let certhreadId;
  let thread;
    if (false) {
      await openai.chat.completions.create({
        thread_id: threadId, 
        messages: [
          {
            role: 'user',
            content: message, 
          },
        ],
      });
      certhreadId = threadId; 
    } else {
      thread = await openai.beta.threads.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });
      certhreadId=thread.id;
    }
  const run = await openai.beta.threads.runs.createAndPoll(certhreadId, {
    assistant_id: "asst_zos5ppLuJxeTrRrrE0cCQtpn",
  });
   
  const messages = await openai.beta.threads.messages.list(certhreadId, {
    run_id: run.id,
  });
   
  const messageout = messages.data.pop();
  let textValue = ""; // text.value を格納する変数を定義
  if (messageout.content[0].type === "text") {
    const { text } = messageout.content[0];
    const { annotations } = text;
    const citations = [];
  
    let index = 0;
    for (let annotation of annotations) {
      text.value = text.value.replace(annotation.text, "[" + index + "]");
      const { file_citation } = annotation;
      if (file_citation) {
        const citedFile = await openai.files.retrieve(file_citation.file_id);
        citations.push("[" + index + "]" + citedFile.filename);
      }
      index++;
    }
    textValue = text.value; // text.value を textValue に格納
  }
  
  return new Response(JSON.stringify({ message: textValue, threadId: certhreadId}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}