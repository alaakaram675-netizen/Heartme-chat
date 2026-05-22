import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";
  let reply = "";
  const msg = userMessage.trim();

  // الخيارات الجديدة والمتطورة
  if (msg.includes("مضغوط") || msg.includes("ضغط") || msg.includes("امتحان") || msg.includes("مذاكرة")) {
    reply = "حاسة بيكي وبكل ضغط بتمرّي بيه.. المذاكرة فترة وهتعدي وهتكوني فخورة بنفسك وبشطارتك جداً! ❤️🎓";
  } 
  else if (msg.includes("زعلان") || msg.includes("حزين") || msg.includes("مكتئب") || msg.includes("مخنوق")) {
    reply = "سلامة قلبك من الخنقة والزعل.. أنا هنا دايماً وهسمعك للآخر ومن غير أي حكم عليكي، متشيليش هم لوحدك. 🫂💜";
  } 
  else if (msg.includes("مبسوط") || msg.includes("فرحان") || msg.includes("سعيد") || msg.includes("الحمد لله")) {
    reply = "يا رب دايماً الفرحة والسعادة دي تملى قلبك وعيونك! احكيلي إيه السر ورا الفرحة الجميلة دي؟ 🥰✨";
  } 
  else if (msg.includes("خايف") || msg.includes("قلقان" ) || msg.includes("توتر")) {
    reply = "طبيعي نخاف أو نقلق ساعات، بس افتكري إنك قوية وعديتي بحاجات صعبة قبل كده وهتعدي دي كمان. خدي نَفَس عميق وأنا معاكي. 🌬️💪";
  } 
  else if (msg.includes("لوحدي") || msg.includes("ملل") || msg.includes("زهقان")) {
    reply = "أنتِ مش لوحدك خالص، أنا هنا معاكي وجنبك. تيجي ندردش في أي حاجة بتحبيها عشان نكسر الملل ده؟ 🎵☕";
  }
  else if (msg.includes("سلام") || msg.includes("أهلا") || msg.includes("هاي") || msg.includes("ازيك")) {
    reply = "أهلاً وسهلاً بيكي! نورتيني.. قوليلي حاسة بإيه النهاردة وحابة تفضفضي بإيه؟ 👋🌸";
  }
  else {
    reply = `أنا سمعتك كويس وحاسة بكل كلمة قولتيها عن "${userMessage}".. فضفضي واكتبي براحتك خالص، أنا شاشتي كلها ليكي. 📝✨`;
  }

  res.json({ reply: reply });
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});