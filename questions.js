// questions.js
// Bilingual quiz data (English primary, Hindi secondary) — 40 questions total.
// Each entry has: en: { q, options, answer }, hi: { q, options, answer }, video: "videos/qX.mp4"
// answer is the index (0-based) of the correct option in the options array.

const quizData = [
  // 1
  {
    en: { q: "Why should we turn off lights when leaving a room?", options: ["To save electricity", "To make the room dark", "To break the switch", "For fun"], answer: 0 },
    hi: { q: "जब हम कमरे से बाहर जाते हैं तो लाइट क्यों बंद करनी चाहिए?", options: ["बिजली बचाने के लिए", "कक्ष को अँधेरा करने के लिए", "स्विच तोड़ने के लिए", "मज़े के लिए"], answer: 0 },
    video: "videos/q1.mp4"
  },
  // 2
  {
    en: { q: "Which is better for the environment: walking or driving short distances?", options: ["Walking", "Driving", "Flying", "Boating"], answer: 0 },
    hi: { q: "छोटे सफ़र के लिए पैदल चलना या गाड़ी चलाना – पर्यावरण के लिए कौन बेहतर है?", options: ["पैदल चलना", "गाड़ी", "उड़ना", "नाव चलाना"], answer: 0 },
    video: "videos/q2.mp4"
  },
  // 3
  {
    en: { q: "Why should we plant more trees?", options: ["For shade and oxygen", "To make roads", "To block sunlight", "For noise"], answer: 0 },
    hi: { q: "हमें और पेड़ क्यों लगाने चाहिए?", options: ["छाँव और ऑक्सीजन के लिए", "सड़कों के लिए", "सूर्य रोकेने के लिए", "शोर के लिये"], answer: 0 },
    video: "videos/q3.mp4"
  },
  // 4
  {
    en: { q: "What happens when we waste water?", options: ["Less water for others", "More clean water", "Better crop yield", "No change"], answer: 0 },
    hi: { q: "जब हम पानी बर्बाद करते हैं तो क्या होता है?", options: ["दूसरों के लिए कम पानी बचता है", "अधिक साफ पानी", "कृषि बेहतर होती है", "कोई बदलाव नहीं"], answer: 0 },
    video: "videos/q4.mp4"
  },
  // 5
  {
    en: { q: "Which is better: using reusable bottles or single-use plastic bottles?", options: ["Single-use plastic", "Reusable bottles", "Glass only", "Both same"], answer: 1 },
    hi: { q: "पुन: प्रयोग होने वाली बोतल या एक बार इस्तेमाल होने वाली प्लास्टिक बोतल – कौन बेहतर है?", options: ["एक बार इस्तेमाल वाली प्लास्टिक", "पुन: उपयोग करने वाली बोतल", "सिर्फ़ काँच", "दोनों समान"], answer: 1 },
    video: "videos/q5.mp4"
  },
  // 6
  {
    en: { q: "Why is recycling important?", options: ["Saves resources", "Creates more trash", "Pollutes more", "Wastes time"], answer: 0 },
    hi: { q: "रीसाइक्लिंग क्यों ज़रूरी है?", options: ["संसाधन बचाती है", "और कचरा बनता है", "और प्रदूषण होता है", "समय बर्बाद होता है"], answer: 0 },
    video: "videos/q6.mp4"
  },
  // 7
  {
    en: { q: "How does using public transport help the Earth?", options: ["Increases traffic", "Reduces emissions per person", "Costs more", "Makes noise"], answer: 1 },
    hi: { q: "सार्वजनिक परिवहन का उपयोग पृथ्वी की मदद कैसे करता है?", options: ["यातायात बढ़ता है", "प्रति व्यक्ति उत्सर्जन घटता है", "ज़्यादा महंगा है", "शोर बढ़ता है"], answer: 1 },
    video: "videos/q7.mp4"
  },
  // 8
  {
    en: { q: "Why should we switch off fans when not in use?", options: ["To save energy", "To damage fan", "To make room cold", "No reason"], answer: 0 },
    hi: { q: "पंखे का इस्तेमाल न होने पर उसे क्यों बंद करना चाहिए?", options: ["ऊर्जा बचाने के लिए", "पंखा नुकसान करने के लिए", "कमरे को ठंडा करने के लिए", "कोई कारण नहीं"], answer: 0 },
    video: "videos/q8.mp4"
  },
  // 9
  {
    en: { q: "What gas is released from burning fossil fuels that warms the Earth?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 1 },
    hi: { q: "जीवाश्म ईंधन जलाने से कौन सी गैस निकलती है जो पृथ्वी को गर्म करती है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"], answer: 1 },
    video: "videos/q9.mp4"
  },
  //10
  {
    en: { q: "Why should we avoid littering in parks and streets?", options: ["Hurts animals & pollutes", "Makes it look nice", "Helps plants grow", "No reason"], answer: 0 },
    hi: { q: "पार्क और सड़कों पर कचरा क्यों नहीं फेंकना चाहिए?", options: ["जानवरों को नुकसान और प्रदूषण होता है", "अच्छा दिखता है", "पेड़ों को मदद करता है", "कोई कारण नहीं"], answer: 0 },
    video: "videos/q10.mp4"
  },
  //11
  {
    en: { q: "Which is better: using cloth bags or plastic bags?", options: ["Plastic bags", "Cloth bags", "Paper only", "Both same"], answer: 1 },
    hi: { q: "कपड़े का बैग या प्लास्टिक बैग – कौन बेहतर है?", options: ["प्लास्टिक बैग", "कॉटन / कपड़े के बैग", "सिर्फ कागज़", "दोनों समान"], answer: 1 },
    video: "videos/q11.mp4"
  },
  //12
  {
    en: { q: "Why should we save electricity?", options: ["Reduce bills & emissions", "To stop lights working", "To waste energy", "No reason"], answer: 0 },
    hi: { q: "हमें बिजली क्यों बचानी चाहिए?", options: ["बिल और उत्सर्जन घटाने के लिए", "लाइटें बंद करने के लिए", "ऊर्जा बर्बाद करने के लिए", "कोई कारण नहीं"], answer: 0 },
    video: "videos/q12.mp4"
  },
  //13
  {
    en: { q: "How does planting gardens at home help the environment?", options: ["Improves air & biodiversity", "Creates pollution", "Increases waste", "No effect"], answer: 0 },
    hi: { q: "घर पर बागवानी करने से पर्यावरण को कैसे मदद मिलती है?", options: ["हवा और जैव विविधता सुधारता है", "प्रदूषण बढ़ता है", "कचरा बढ़ता है", "कोई असर नहीं"], answer: 0 },
    video: "videos/q13.mp4"
  },
  //14
  {
    en: { q: "Why should we not burn garbage?", options: ["Releases harmful gases", "Cleans area", "Creates warmth", "Makes soil fertile"], answer: 0 },
    hi: { q: "हमें कचरा क्यों नहीं जलाना चाहिए?", options: ["हानिकारक गैसें निकलती हैं", "क्षेत्र साफ़ होता है", "गर्माहट मिलती है", "मिट्टी उपजाऊ बनती है"], answer: 0 },
    video: "videos/q14.mp4"
  },
  //15
  {
    en: { q: "Which is better: using both sides of paper or using only one side?", options: ["Use one side only", "Use both sides", "Buy more paper", "Tear paper"], answer: 1 },
    hi: { q: "कागज़ के दोनों तरफ़ लिखना या सिर्फ़ एक तरफ़ – कौन बेहतर है?", options: ["सिर्फ एक तरफ", "दोनों तरफ़ उपयोग करें", "और कागज़ खरीदें", "कागज़ फाड़ दें"], answer: 1 },
    video: "videos/q15.mp4"
  },
  //16
  {
    en: { q: "Why should we close taps tightly after use?", options: ["To avoid water waste", "To break the tap", "To keep water hot", "No reason"], answer: 0 },
    hi: { q: "इस्तेमाल के बाद नल को कसकर क्यों बंद करना चाहिए?", options: ["पानी की बर्बादी रोकने के लिए", "नल तोड़ने के लिए", "पानी गर्म रखने के लिए", "कोई कारण नहीं"], answer: 0 },
    video: "videos/q16.mp4"
  },
  //17
  {
    en: { q: "How does riding a bicycle help reduce global warming?", options: ["By burning fuel", "Reduces emissions & exercise", "Increases traffic", "Pollutes more"], answer: 1 },
    hi: { q: "साइकिल चलाना ग्लोबल वार्मिंग कम करने में कैसे मदद करता है?", options: ["ईंधन जलाकर", "उत्सर्जन घटाकर और व्यायाम कराकर", "यातायात बढ़ाकर", "अधिक प्रदूषण कर के"], answer: 1 },
    video: "videos/q17.mp4"
  },
  //18
  {
    en: { q: "Why should we use solar energy?", options: ["It's renewable & clean", "It pollutes more", "Costs infinite", "Not useful"], answer: 0 },
    hi: { q: "हमें सौर ऊर्जा का उपयोग क्यों करना चाहिए?", options: ["यह नवीकरणीय और साफ है", "यह अधिक प्रदूषित करता है", "लागत अनंत है", "उपयोगी नहीं"], answer: 0 },
    video: "videos/q18.mp4"
  },
  //19
  {
    en: { q: "Which is better: buying local fruits or imported fruits?", options: ["Imported", "Local", "Frozen only", "Canned"], answer: 1 },
    hi: { q: "स्थानीय फल खरीदना या आयातित फल – कौन बेहतर है?", options: ["आयातित", "स्थानीय", "सिर्फ जमे हुए", "कैन्ड"], answer: 1 },
    video: "videos/q19.mp4"
  },
  //20
  {
    en: { q: "Why should we avoid wasting food?", options: ["Wastes resources & emissions", "Makes food cheaper", "Increases hunger", "No reason"], answer: 0 },
    hi: { q: "हमें खाना क्यों नहीं बर्बाद करना चाहिए?", options: ["संसाधनों और उत्सर्जन की बर्बादी होती है", "खाना सस्ता होता है", "भुखमरी बढ़ती है", "कोई कारण नहीं"], answer: 0 },
    video: "videos/q20.mp4"
  },

  // 21 (Teens - Science)
  {
    en: { q: "What is the greenhouse effect and why is it important for Earth?", options: ["Trapping heat by atmosphere", "Cooling the Earth", "Removing ozone", "Creating rain"], answer: 0 },
    hi: { q: "ग्रीनहाउस प्रभाव क्या है और यह पृथ्वी के लिए क्यों महत्वपूर्ण है?", options: ["वायुमंडल द्वारा गर्मी का फँसना", "पृथ्वी को ठंडा करना", "ओज़ोन हटाना", "बारिश बनाना"], answer: 0 },
    video: "videos/q21.mp4"
  },
  //22
  {
    en: { q: "Name two main greenhouse gases responsible for global warming.", options: ["Oxygen & Helium", "Carbon dioxide & Methane", "Argon & Neon", "Hydrogen & Helium"], answer: 1 },
    hi: { q: "ग्लोबल वार्मिंग के लिए ज़िम्मेदार दो मुख्य ग्रीनहाउस गैसों के नाम बताइए।", options: ["ऑक्सीजन और हीलियम", "कार्बन डाइऑक्साइड और मीथेन", "आर्गन और नीयन", "हाइड्रोजन और हीलियम"], answer: 1 },
    video: "videos/q22.mp4"
  },
  //23
  {
    en: { q: "How does deforestation affect carbon dioxide levels?", options: ["Increases CO₂ because fewer trees absorb it", "Decreases CO₂", "No effect", "Removes CO₂ completely"], answer: 0 },
    hi: { q: "वनों की कटाई कार्बन डाइऑक्साइड के स्तर को कैसे प्रभावित करती है?", options: ["CO₂ बढ़ता है क्योंकि कम पेड़ उसे सोखते हैं", "CO₂ घटता है", "कोई प्रभाव नहीं", "CO₂ पूरी तरह हट जाता है"], answer: 0 },
    video: "videos/q23.mp4"
  },
  //24
  {
    en: { q: "Why is the polar ice melting a problem for coastal cities?", options: ["Sea-level rise & flooding", "More snow", "Better fishing", "Less sunlight"], answer: 0 },
    hi: { q: "ध्रुवीय बर्फ पिघलना तटीय शहरों के लिए समस्या क्यों है?", options: ["समुद्र स्तर बढ़ना और बाढ़", "ज़्यादा बर्फ", "बेहतर मछली पकड़ना", "कम धूप"], answer: 0 },
    video: "videos/q24.mp4"
  },
  //25
  {
    en: { q: "What is carbon footprint?", options: ["Measure of CO₂ emissions from activities", "Amount of trees in area", "Quality of air", "Type of soil"], answer: 0 },
    hi: { q: "कार्बन फुटप्रिंट क्या है?", options: ["गतिविधियों से निकलने वाले CO₂ का माप", "क्षेत्र में पेड़ों की संख्या", "वायु की गुणवत्ता", "मिट्टी का प्रकार"], answer: 0 },
    video: "videos/q25.mp4"
  },
  //26
  {
    en: { q: "How do fossil fuels contribute to climate change?", options: ["By releasing greenhouse gases when burned", "By absorbing CO₂", "By lowering temperatures", "By creating oxygen"], answer: 0 },
    hi: { q: "जीवाश्म ईंधन जलवायु परिवर्तन में कैसे योगदान करते हैं?", options: ["जलने पर ग्रीनहाउस गैसें छोड़कर", "CO₂ सोखकर", "तापमान घटाकर", "ऑक्सीजन बनाकर"], answer: 0 },
    video: "videos/q26.mp4"
  },
  //27
  {
    en: { q: "Why is renewable energy better than non-renewable energy?", options: ["Infinite & lower emissions", "Runs out quickly", "More polluting", "Less efficient always"], answer: 0 },
    hi: { q: "नवीकरणीय ऊर्जा गैर-नवीकरणीय ऊर्जा से बेहतर क्यों है?", options: ["अनंत और कम उत्सर्जन", "जल्दी खत्म हो जाती है", "ज्यादा प्रदूषण करती है", "हमेशा कम कुशल"], answer: 0 },
    video: "videos/q27.mp4"
  },
  //28
  {
    en: { q: "How does air pollution affect human health?", options: ["Causes respiratory & heart diseases", "Improves health", "No effect", "Makes people taller"], answer: 0 },
    hi: { q: "वायु प्रदूषण मानव स्वास्थ्य को कैसे प्रभावित करता है?", options: ["श्वसन और हृदय रोगों का कारण बनता है", "स्वास्थ्य सुधारता है", "कोई प्रभाव नहीं", "लोगों को लंबा बनाता है"], answer: 0 },
    video: "videos/q28.mp4"
  },
  //29
  {
    en: { q: "What is ocean acidification and how is it caused?", options: ["Oceans become more acidic due to CO₂ absorption", "Oceans become more basic", "Caused by oil spills only", "Caused by sunlight"], answer: 0 },
    hi: { q: "महासागरीय अम्लीकरण क्या है और यह कैसे होता है?", options: ["CO₂ अवशोषण से महासागर अधिक अम्लीय हो जाते हैं", "महासागर अधिक क्षारीय हो जाते हैं", "सिर्फ तेल फैलाव से होता है", "धूप के कारण होता है"], answer: 0 },
    video: "videos/q29.mp4"
  },
  //30
  {
    en: { q: "How can reforestation help fight climate change?", options: ["Absorbs CO₂ & restores habitats", "Increases CO₂", "Harms biodiversity", "No effect"], answer: 0 },
    hi: { q: "पुनर्वनीकरण जलवायु परिवर्तन से लड़ने में कैसे मदद करता है?", options: ["CO₂ सोखता है और आवास बहाल करता है", "CO₂ बढ़ाता है", "जैव विविधता को नुकसान पहुँचाता है", "कोई असर नहीं"], answer: 0 },
    video: "videos/q30.mp4"
  },
  //31
  {
    en: { q: "Why is methane more dangerous than carbon dioxide for climate change?", options: ["Higher short-term warming potential", "Less common", "No warming effect", "Less reactive"], answer: 0 },
    hi: { q: "मीथेन जलवायु परिवर्तन के लिए कार्बन डाइऑक्साइड से अधिक खतरनाक क्यों है?", options: ["कम अवधि में अधिक गर्मी पैदा करने की क्षमता", "कम पाया जाता है", "कोई गर्मी प्रभाव नहीं", "कम प्रतिक्रियाशील"], answer: 0 },
    video: "videos/q31.mp4"
  },
  //32
  {
    en: { q: "How does global warming impact the water cycle?", options: ["Alters evaporation & precipitation patterns", "Stops rain entirely", "Makes water heavier", "No change"], answer: 0 },
    hi: { q: "ग्लोबल वार्मिंग जल चक्र को कैसे प्रभावित करती है?", options: ["वाष्पीकरण और वर्षा पैटर्न बदलती है", "पूरी तरह बारिश बंद हो जाती है", "पानी भारी हो जाता है", "कोई परिवर्तन नहीं"], answer: 0 },
    video: "videos/q32.mp4"
  },
  //33
  {
    en: { q: "What role do coral reefs play in climate balance?", options: ["Support biodiversity & protect coasts", "Increase warming", "Absorb oil spills only", "Cause storms"], answer: 0 },
    hi: { q: "प्रवाल भित्तियाँ जलवायु संतुलन में क्या भूमिका निभाती हैं?", options: ["जैव विविधता का समर्थन और तटों की रक्षा", "गरमी बढ़ाती हैं", "सिर्फ तेल फैलाव सोखती हैं", "तूफ़ान पैदा करती हैं"], answer: 0 },
    video: "videos/q33.mp4"
  },
  //34
  {
    en: { q: "Why is energy efficiency important in appliances?", options: ["Reduces energy use & emissions", "Increases bills", "Wastes electricity", "No advantage"], answer: 0 },
    hi: { q: "उपकरणों में ऊर्जा दक्षता क्यों महत्वपूर्ण है?", options: ["ऊर्जा उपयोग और उत्सर्जन घटाती है", "बिल बढ़ाते हैं", "बिजली बर्बाद करती है", "कोई फायदा नहीं"], answer: 0 },
    video: "videos/q34.mp4"
  },
  //35
  {
    en: { q: "How can public transport reduce carbon emissions?", options: ["By carrying many people per trip vs single cars", "By using more fuel", "By increasing traffic", "No effect"], answer: 0 },
    hi: { q: "सार्वजनिक परिवहन कार्बन उत्सर्जन को कैसे कम कर सकता है?", options: ["एक यात्रा में कई लोगों को ले जाकर (एक कार बनाम कई)", "ज़्यादा ईंधन इस्तेमाल करके", "यातायात बढ़ाकर", "कोई प्रभाव नहीं"], answer: 0 },
    video: "videos/q35.mp4"
  },
  //36
  {
    en: { q: "What is the role of glaciers in Earth’s climate system?", options: ["Reflect sunlight & store freshwater", "Produce oil", "Cause earthquakes", "None"], answer: 0 },
    hi: { q: "पृथ्वी के जलवायु तंत्र में ग्लेशियरों की क्या भूमिका है?", options: ["धूप को परावर्तित करना और ताज़ा पानी संग्रहित करना", "तेल बनाना", "भूकंप पैदा करना", "कोई नहीं"], answer: 0 },
    video: "videos/q36.mp4"
  },
  //37
  {
    en: { q: "Why does dark-colored ice melt faster than white ice?", options: ["Absorbs more sunlight (lower albedo)", "Has different water", "Warmer chemically", "No reason"], answer: 0 },
    hi: { q: "गहरे रंग की बर्फ सफेद बर्फ से जल्दी क्यों पिघलती है?", options: ["अधिक धूप सोखती है (कम अल्बेडो)", "पानी अलग है", "रासायनिक रूप से गर्म", "कोई कारण नहीं"], answer: 0 },
    video: "videos/q37.mp4"
  },
  //38
  {
    en: { q: "How does global warming affect agriculture?", options: ["Alters growing seasons & increases stress", "Makes crops grow everywhere", "No effect", "Always improves yields"], answer: 0 },
    hi: { q: "ग्लोबल वार्मिंग कृषि को कैसे प्रभावित करती है?", options: ["उगाने के मौसम बदलती हैं और तनाव बढ़ता है", "हर जगह फसल उगती है", "कोई प्रभाव नहीं", "हमेशा पैदावार सुधारती है"], answer: 0 },
    video: "videos/q38.mp4"
  },
  //39
  {
    en: { q: "Why is international cooperation necessary to fight climate change?", options: ["Emissions are global and require shared solutions", "Not necessary", "Only local action matters", "For trade reasons only"], answer: 0 },
    hi: { q: "जलवायु परिवर्तन से लड़ने के लिए अंतरराष्ट्रीय सहयोग क्यों आवश्यक है?", options: ["उत्सर्जन वैश्विक है और साझा समाधान चाहिए", "ज़रूरी नहीं", "सिर्फ स्थानीय कार्रवाई जरूरी है", "सिर्फ व्यापार कारणों से"], answer: 0 },
    video: "videos/q39.mp4"
  },
  //40
  {
    en: { q: "What is carbon sequestration and how does it help the planet?", options: ["Storing CO₂ in plants/soil/rocks to lower atmospheric CO₂", "Releasing CO₂", "A type of farming", "A fossil fuel"], answer: 0 },
    hi: { q: "कार्बन अवशोषण क्या है और यह पृथ्वी की कैसे मदद करता है?", options: ["वृक्ष/मिट्टी/चट्टानों में CO₂ भंडारित करना ताकि वायुमंडलीय CO₂ घटे", "CO₂ छोड़ना", "एक प्रकार की खेती", "एक जीवाश्म ईंधन"], answer: 0 },
    video: "videos/q40.mp4"
  }
];
