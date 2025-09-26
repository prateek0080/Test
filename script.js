function changeLang() {
  let lang = document.getElementById("langSelect").value;

  const translations = {
    en: {
      heroTitle: "Your Health, Connected",
      heroDesc: "One platform for consultations, medicines, labs, ambulances & more.",
      f1: "Doctor Consultation",
      f1d: "Video or phone consultations with qualified doctors.",
      f2: "24/7 Ambulance",
      f2d: "Instant ambulance booking during emergencies.",
      f3: "Online Pharmacy",
      f3d: "Order medicines with home delivery.",
      f4: "Lab Tests",
      f4d: "Book and access test reports online.",
      f5: "Hospital Appointments",
      f5d: "Schedule appointments without hassle."
    },
    hi: {
      heroTitle: "आपका स्वास्थ्य, अब जुड़ा हुआ",
      heroDesc: "एक प्लेटफ़ॉर्म – डॉक्टर, दवा, लैब, एम्बुलेंस और अधिक।",
      f1: "डॉक्टर परामर्श",
      f1d: "योग्य डॉक्टरों से वीडियो या फोन परामर्श।",
      f2: "24/7 एम्बुलेंस",
      f2d: "आपातकाल में तुरंत एम्बुलेंस बुक करें।",
      f3: "ऑनलाइन फार्मेसी",
      f3d: "घर बैठे दवाएं ऑर्डर करें।",
      f4: "लैब टेस्ट",
      f4d: "ऑनलाइन लैब रिपोर्ट बुक और देखें।",
      f5: "अस्पताल अपॉइंटमेंट",
      f5d: "बिना परेशानी अपॉइंटमेंट बुक करें।"
    },
    bn: {
      heroTitle: "আপনার স্বাস্থ্য, সংযুক্ত",
      heroDesc: "একটি প্ল্যাটফর্ম – ডাক্তার, ওষুধ, ল্যাব, অ্যাম্বুলেন্স এবং আরও অনেক কিছু।",
      f1: "ডাক্তার পরামর্শ",
      f1d: "যোগ্য ডাক্তারদের সাথে ভিডিও বা ফোনে পরামর্শ।",
      f2: "২৪/৭ অ্যাম্বুলেন্স",
      f2d: "জরুরী অবস্থায় তৎক্ষণাৎ অ্যাম্বুলেন্স বুক করুন।",
      f3: "অনলাইন ফার্মেসি",
      f3d: "বাড়িতে ওষুধ অর্ডার করুন।",
      f4: "ল্যাব টেস্ট",
      f4d: "অনলাইনে ল্যাব রিপোর্ট বুক এবং দেখুন।",
      f5: "হাসপাতালের অ্যাপয়েন্টমেন্ট",
      f5d: "সহজে হাসপাতালের অ্যাপয়েন্টমেন্ট বুক করুন।"
    },
    gu: {
      heroTitle: "તમારું સ્વાસ્થ્ય, જોડાયેલ",
      heroDesc: "એક પ્લેટફોર્મ – ડૉક્ટર, દવા, લેબ, એમ્બ્યુલન્સ અને વધુ.",
      f1: "ડૉક્ટર પરામર્શ",
      f1d: "લાયકાત ધરાવતા ડૉક્ટર સાથે વિડિયો અથવા ફોન પરામર્શ.",
      f2: "24/7 એમ્બ્યુલન્સ",
      f2d: "તાત્કાલિક પરિસ્થિતિમાં તરત એમ્બ્યુલન્સ બુક કરો.",
      f3: "ઓનલાઇન ફાર્મસી",
      f3d: "ઘરે બેઠા દવાઓ ઓર્ડર કરો.",
      f4: "લેબ ટેસ્ટ",
      f4d: "ઓનલાઇન લેબ રિપોર્ટ બુક કરો અને જુઓ.",
      f5: "હૉસ્પિટલ એપોઇન્ટમેન્ટ",
      f5d: "આસાનથી એપોઇન્ટમેન્ટ બુક કરો."
    },
    ta: {
      heroTitle: "உங்கள் ஆரோக்கியம், இணைந்தது",
      heroDesc: "ஒரே தளம் – மருத்துவர், மருந்து, ஆய்வகம், ஆம்புலன்ஸ் மற்றும் மேலும்.",
      f1: "மருத்துவர் ஆலோசனை",
      f1d: "தகுதியான மருத்துவர்களுடன் வீடியோ அல்லது தொலைபேசி ஆலோசனை.",
      f2: "24/7 ஆம்புலன்ஸ்",
      f2d: "அவசரத்தில் உடனடி ஆம்புலன்ஸ் புக் செய்யவும்.",
      f3: "ஆன்லைன் மருந்தகம்",
      f3d: "வீட்டிலேயே மருந்துகள் ஆர்டர் செய்யவும்.",
      f4: "ஆய்வக பரிசோதனைகள்",
      f4d: "ஆன்லைனில் பரிசோதனை முடிவுகளைப் பாருங்கள்.",
      f5: "மருத்துவமனை நேர்முகம்",
      f5d: "எளிதாக மருத்துவமனை நேர்முகத்தைப் புக் செய்யவும்."
    },
    te: {
      heroTitle: "మీ ఆరోగ్యం, ఇప్పుడు అనుసంధానం",
      heroDesc: "ఒకే వేదిక - డాక్టర్, మందులు, ల్యాబ్, అంబులెన్స్ ఇంకా మరెన్నో.",
      f1: "డాక్టర్ సలహా",
      f1d: "అర్హులైన డాక్టర్లతో వీడియో లేదా ఫోన్ సంప్రదింపులు.",
      f2: "24/7 అంబులెన్స్",
      f2d: "అత్యవసర పరిస్థితుల్లో తక్షణ అంబులెన్స్ బుకింగ్.",
      f3: "ఆన్‌లైన్ ఫార్మసీ",
      f3d: "మీ ఇంటికి మందులు డెలివరీ చేయండి.",
      f4: "ల్యాబ్ పరీక్షలు",
      f4d: "ఆన్‌లైన్‌లో పరీక్షలు బుక్ చేయండి, రిపోర్ట్‌లు చూడండి.",
      f5: "ఆసుపత్రి అపాయింట్‌మెంట్‌లు",
      f5d: "ఎటువంటి ఇబ్బంది లేకుండా అపాయింట్‌మెంట్‌లు షెడ్యూల్ చేయండి."
    },
    kn: {
      heroTitle: "ನಿಮ್ಮ ಆರೋಗ್ಯ, ಈಗ ಸಂಪರ್ಕದಲ್ಲಿದೆ",
      heroDesc: "ಒಂದು ವೇದಿಕೆ - ವೈದ್ಯರು, ಔಷಧಗಳು, ಲ್ಯಾಬ್, ಆಂಬ್ಯುಲೆನ್ಸ್ ಮತ್ತು ಇನ್ನಷ್ಟು.",
      f1: "ವೈದ್ಯರ ಸಲಹೆ",
      f1d: "ಅರ್ಹ ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಅಥವಾ ಫೋನ್ ಸಮಾಲೋಚನೆಗಳು.",
      f2: "24/7 ಆಂಬ್ಯುಲೆನ್ಸ್",
      f2d: "ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ತಕ್ಷಣ ಆಂಬ್ಯುಲೆನ್ಸ್ ಬುಕಿಂಗ್.",
      f3: "ಆನ್‌ಲೈನ್ ಫಾರ್ಮಸಿ",
      f3d: "ಮನೆಗೆ ಔಷಧಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ.",
      f4: "ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು",
      f4d: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪರೀಕ್ಷಾ ವರದಿಗಳನ್ನು ಬುಕ್ ಮಾಡಿ ಮತ್ತು ವೀಕ್ಷಿಸಿ.",
      f5: "ಆಸ್ಪತ್ರೆ ನೇಮಕಾತಿಗಳು",
      f5d: "ಯಾವುದೇ ತೊಂದರೆಯಿಲ್ಲದೆ ನೇಮಕಾತಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ."
    },
    ml: {
      heroTitle: "നിങ്ങളുടെ ആരോഗ്യം, ബന്ധിപ്പിച്ചത്",
      heroDesc: "ഒരു പ്ലാറ്റ്‌ഫോം - ഡോക്ടർ, മരുന്നുകൾ, ലാബ്, ആംബുലൻസ് എന്നിവയും അതിലധികവും.",
      f1: "ഡോക്ടർ കൺസൾട്ടേഷൻ",
      f1d: "യോഗ്യതയുള്ള ഡോക്ടർമാരുമായി വീഡിയോ അല്ലെങ്കിൽ ഫോൺ കൺസൾട്ടേഷനുകൾ.",
      f2: "24/7 ആംബുലൻസ്",
      f2d: "അടിയന്തിര സാഹചര്യങ്ങളിൽ തൽക്ഷണ ആംബുലൻസ് ബുക്കിംഗ്.",
      f3: "ഓൺലൈൻ ഫാർമസി",
      f3d: "വീട്ടിൽ മരുന്നുകൾ ഓർഡർ ചെയ്യുക.",
      f4: "ലാബ് ടെസ്റ്റുകൾ",
      f4d: "ഓൺലൈനിൽ ലാബ് ടെസ്റ്റ് റിപ്പോർട്ടുകൾ ബുക്ക് ചെയ്യുക, കാണുക.",
      f5: "ആശുപത്രി അപ്പോയിന്റ്‌മെന്റുകൾ",
      f5d: "ബുദ്ധിമുട്ടില്ലാതെ അപ്പോയിന്റ്‌മെന്റുകൾ ഷെഡ്യൂൾ ചെയ്യുക."
    },
    mr: {
      heroTitle: "तुमचं आरोग्य, कनेक्टेड",
      heroDesc: "एकच प्लॅटफॉर्म - डॉक्टर, औषधे, लॅब, ॲम्ब्युलन्स आणि बरेच काही.",
      f1: "डॉक्टर सल्ला",
      f1d: "पात्र डॉक्टरांशी व्हिडिओ किंवा फोनवर सल्ला.",
      f2: "24/7 ॲम्ब्युलन्स",
      f2d: "आणीबाणीच्या वेळी त्वरित ॲम्ब्युलन्स बुकिंग.",
      f3: "ऑनलाईन फार्मसी",
      f3d: "घरी बसून औषधे ऑर्डर करा.",
      f4: "लॅब टेस्ट",
      f4d: "लॅब रिपोर्ट ऑनलाईन बुक करा आणि पहा.",
      f5: "रुग्णालय अपॉइंटमेंट्स",
      f5d: "त्रास न होता अपॉइंटमेंट्स शेड्यूल करा."
    },
    pa: {
      heroTitle: "ਤੁਹਾਡੀ ਸਿਹਤ, ਜੁੜੀ ਹੋਈ",
      heroDesc: "ਇੱਕ ਪਲੇਟਫਾਰਮ - ਡਾਕਟਰ, ਦਵਾਈਆਂ, ਲੈਬ, ਐਂਬੂਲੈਂਸ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ।",
      f1: "ਡਾਕਟਰ ਸਲਾਹ",
      f1d: "ਯੋਗ ਡਾਕਟਰਾਂ ਨਾਲ ਵੀਡੀਓ ਜਾਂ ਫ਼ੋਨ 'ਤੇ ਸਲਾਹ।",
      f2: "24/7 ਐਂਬੂਲੈਂਸ",
      f2d: "ਐਮਰਜੈਂਸੀ ਵਿੱਚ ਤੁਰੰਤ ਐਂਬੂਲੈਂਸ ਬੁੱਕ ਕਰੋ।",
      f3: "ਆਨਲਾਈਨ ਫਾਰਮੇਸੀ",
      f3d: "ਘਰ ਬੈਠੇ ਦਵਾਈਆਂ ਆਰਡਰ ਕਰੋ।",
      f4: "ਲੈਬ ਟੈਸਟ",
      f4d: "ਲੈਬ ਰਿਪੋਰਟਾਂ ਆਨਲਾਈਨ ਬੁੱਕ ਅਤੇ ਦੇਖੋ।",
      f5: "ਹਸਪਤਾਲ ਅਪੋਇੰਟਮੈਂਟਾਂ",
      f5d: "ਬਿਨਾਂ ਕਿਸੇ ਝੰਜਟ ਦੇ ਅਪੋਇੰਟਮੈਂਟਾਂ ਨਿਸ਼ਚਿਤ ਕਰੋ।"
    }
  };

  let t = translations[lang] || translations.en;

  document.getElementById("heroTitle").innerText = t.heroTitle;
  document.getElementById("heroDesc").innerText = t.heroDesc;
  document.getElementById("f1").innerText = t.f1;
  document.getElementById("f1d").innerText = t.f1d;
  document.getElementById("f2").innerText = t.f2;
  document.getElementById("f2d").innerText = t.f2d;
  document.getElementById("f3").innerText = t.f3;
  document.getElementById("f3d").innerText = t.f3d;
  document.getElementById("f4").innerText = t.f4;
  document.getElementById("f4d").innerText = t.f4d;
  document.getElementById("f5").innerText = t.f5;
  document.getElementById("f5d").innerText = t.f5d;
}

// SOS Button Logic
document.getElementById('sosBtn').addEventListener('click', async () => {
    if (confirm("Are you sure you want to send an SOS alert? This will alert emergency services.")) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                sendSOSAlert(lat, lon);
            }, () => {
                alert("Could not get your location. Sending alert without location data.");
                sendSOSAlert(null, null);
            });
        } else {
            alert("Geolocation is not supported by your browser. Sending alert without location.");
            sendSOSAlert(null, null);
        }
    }
});

async function sendSOSAlert(lat, lon) {
    try {
        const response = await fetch('/api/sos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ latitude: lat, longitude: lon })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error sending SOS:', error);
        alert('Failed to send SOS alert. Please try again.');
    }
}