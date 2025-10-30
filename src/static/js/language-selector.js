const languages = [
    { name: 'Mandarin Chinese (China)', code: 'cmn-CN' },
    { name: 'English (US)', code: 'en-US' },
    { name: 'Japanese (Japan)', code: 'ja-JP' },
    { name: 'Russian (Russia)', code: 'ru-RU' },
    { name: 'Vietnamese (Vietnam)', code: 'vi-VN' },
    { name: 'German (Germany)', code: 'de-DE' },
    { name: 'Spanish (US)', code: 'es-US' },
    { name: 'French (France)', code: 'fr-FR' },
    { name: 'Hindi (India)', code: 'hi-IN' },
    { name: 'Portuguese (Brazil)', code: 'pt-BR' },
    { name: 'Arabic (Generic)', code: 'ar-XA' },
    { name: 'Spanish (Spain)', code: 'es-ES' },
    { name: 'French (Canada)', code: 'fr-CA' },
    { name: 'Indonesian (Indonesia)', code: 'id-ID' },
    { name: 'Italian (Italy)', code: 'it-IT' },
    { name: 'Turkish (Turkey)', code: 'tr-TR' },
    { name: 'Bengali (India)', code: 'bn-IN' },
    { name: 'Gujarati (India)', code: 'gu-IN' },
    { name: 'Kannada (India)', code: 'kn-IN' },
    { name: 'Marathi (India)', code: 'mr-IN' },
    { name: 'Malayalam (India)', code: 'ml-IN' },
    { name: 'Tamil (India)', code: 'ta-IN' },
    { name: 'Telugu (India)', code: 'te-IN' },
    { name: 'Dutch (Netherlands)', code: 'nl-NL' },
    { name: 'Korean (South Korea)', code: 'ko-KR' },
    { name: 'Polish (Poland)', code: 'pl-PL' },
    { name: 'English (Australia)', code: 'en-AU' },
    { name: 'English (UK)', code: 'en-GB' },
    { name: 'English (India)', code: 'en-IN' },
    { name: 'Thai (Thailand)', code: 'th-TH' }
];

function getLanguage(languageCode) {
    return languages.find(lang => lang.code === languageCode);
}

export { languages, getLanguage };
