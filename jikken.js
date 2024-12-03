import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: "user",
        content: "こんにちは",
      },
    ],
  });
  const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
    assistant_id: "asst_zos5ppLuJxeTrRrrE0cCQtpn",
  });
   
  const messages = await openai.beta.threads.messages.list("thread_b32QMznLzcnXjSOQNvnh2Dva", {
    run_id: run.id,
  });
   
  const messageout = messages.data.pop();
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
    console.log(thread.id);
    console.log(text.value);
  }
}

main().catch(console.error);