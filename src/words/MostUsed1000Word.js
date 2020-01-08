export default class MostUsed1000Words{
  static getRandomWord = () => {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  static words = [{
    "English": "the",
    "Turkish": "bu"
  },
  {
    "English": "of",
    "Turkish": "bu"
  },
  {
    "English": "to",
    "Turkish": "için"
  },
  {
    "English": "and",
    "Turkish": "ve"
  },
  {
    "English": "a",
    "Turkish": "bir"
  },
  {
    "English": "in",
    "Turkish": "içinde"
  },
  {
    "English": "is",
    "Turkish": "olur"
  },
  {
    "English": "it",
    "Turkish": "bu"
  },
  {
    "English": "you",
    "Turkish": "seni"
  },
  {
    "English": "that",
    "Turkish": "bu"
  },
  {
    "English": "he",
    "Turkish": "o"
  },
  {
    "English": "was",
    "Turkish": "oldu"
  },
  {
    "English": "for",
    "Turkish": "için"
  },
  {
    "English": "on",
    "Turkish": "üzerinde"
  },
  {
    "English": "are",
    "Turkish": "var"
  },
  {
    "English": "with",
    "Turkish": "ile"
  },
  {
    "English": "as",
    "Turkish": "olarak"
  },
  {
    "English": "I",
    "Turkish": "Ben"
  },
  {
    "English": "his",
    "Turkish": "onun"
  },
  {
    "English": "they",
    "Turkish": "onlar"
  },
  {
    "English": "be",
    "Turkish": "olması"
  },
  {
    "English": "at",
    "Turkish": "at"
  },
  {
    "English": "one",
    "Turkish": "bir"
  },
  {
    "English": "have",
    "Turkish": "var"
  },
  {
    "English": "this",
    "Turkish": "bu"
  },
  {
    "English": "from",
    "Turkish": "gelen"
  },
  {
    "English": "or",
    "Turkish": "ya"
  },
  {
    "English": "had",
    "Turkish": "vardı"
  },
  {
    "English": "by",
    "Turkish": "tarafından"
  },
  {
    "English": "hot",
    "Turkish": "sıcak"
  },
  {
    "English": "word",
    "Turkish": "word"
  },
  {
    "English": "but",
    "Turkish": "ama"
  },
  {
    "English": "what",
    "Turkish": "ne"
  },
  {
    "English": "some",
    "Turkish": "bazı"
  },
  {
    "English": "we",
    "Turkish": "biz"
  },
  {
    "English": "can",
    "Turkish": "olabilir"
  },
  {
    "English": "out",
    "Turkish": "dışarı"
  },
  {
    "English": "other",
    "Turkish": "diğer"
  },
  {
    "English": "were",
    "Turkish": "vardı"
  },
  {
    "English": "all",
    "Turkish": "tüm"
  },
  {
    "English": "there",
    "Turkish": "orada"
  },
  {
    "English": "when",
    "Turkish": "ne zaman"
  },
  {
    "English": "up",
    "Turkish": "Yukarı"
  },
  {
    "English": "use",
    "Turkish": "kullanın"
  },
  {
    "English": "your",
    "Turkish": "senin"
  },
  {
    "English": "how",
    "Turkish": "nasıl"
  },
  {
    "English": "said",
    "Turkish": "dedi"
  },
  {
    "English": "an",
    "Turkish": "bir"
  },
  {
    "English": "each",
    "Turkish": "her"
  },
  {
    "English": "she",
    "Turkish": "o"
  },
  {
    "English": "which",
    "Turkish": "hangi"
  },
  {
    "English": "do",
    "Turkish": "yap"
  },
  {
    "English": "their",
    "Turkish": "onların"
  },
  {
    "English": "time",
    "Turkish": "zaman"
  },
  {
    "English": "if",
    "Turkish": "eğer"
  },
  {
    "English": "will",
    "Turkish": "olur"
  },
  {
    "English": "way",
    "Turkish": "yol"
  },
  {
    "English": "about",
    "Turkish": "hakkında"
  },
  {
    "English": "many",
    "Turkish": "birçok"
  },
  {
    "English": "then",
    "Turkish": "sonra"
  },
  {
    "English": "them",
    "Turkish": "onları"
  },
  {
    "English": "write",
    "Turkish": "yaz"
  },
  {
    "English": "would",
    "Turkish": "olur"
  },
  {
    "English": "like",
    "Turkish": "gibi"
  },
  {
    "English": "so",
    "Turkish": "yani"
  },
  {
    "English": "these",
    "Turkish": "bu"
  },
  {
    "English": "her",
    "Turkish": "onu"
  },
  {
    "English": "long",
    "Turkish": "uzun"
  },
  {
    "English": "make",
    "Turkish": "yapmak"
  },
  {
    "English": "thing",
    "Turkish": "şey"
  },
  {
    "English": "see",
    "Turkish": "bakın"
  },
  {
    "English": "him",
    "Turkish": "onu"
  },
  {
    "English": "two",
    "Turkish": "iki"
  },
  {
    "English": "has",
    "Turkish": "var"
  },
  {
    "English": "look",
    "Turkish": "bak"
  },
  {
    "English": "more",
    "Turkish": "daha"
  },
  {
    "English": "day",
    "Turkish": "gün"
  },
  {
    "English": "could",
    "Turkish": "olabilir"
  },
  {
    "English": "go",
    "Turkish": "git"
  },
  {
    "English": "come",
    "Turkish": "gel"
  },
  {
    "English": "did",
    "Turkish": "yaptı"
  },
  {
    "English": "number",
    "Turkish": "numarası"
  },
  {
    "English": "sound",
    "Turkish": "ses"
  },
  {
    "English": "no",
    "Turkish": "hayır"
  },
  {
    "English": "most",
    "Turkish": "en"
  },
  {
    "English": "people",
    "Turkish": "insanlar"
  },
  {
    "English": "my",
    "Turkish": "benim"
  },
  {
    "English": "over",
    "Turkish": "üzerinde"
  },
  {
    "English": "know",
    "Turkish": "biliyorum"
  },
  {
    "English": "water",
    "Turkish": "su"
  },
  {
    "English": "than",
    "Turkish": "daha"
  },
  {
    "English": "call",
    "Turkish": "Ara"
  },
  {
    "English": "first",
    "Turkish": "ilk"
  },
  {
    "English": "who",
    "Turkish": "kim"
  },
  {
    "English": "may",
    "Turkish": "olabilir"
  },
  {
    "English": "down",
    "Turkish": "aşağı"
  },
  {
    "English": "side",
    "Turkish": "yan"
  },
  {
    "English": "been",
    "Turkish": "oldu"
  },
  {
    "English": "now",
    "Turkish": "şimdi"
  },
  {
    "English": "find",
    "Turkish": "bul"
  },
  {
    "English": "any",
    "Turkish": "herhangi bir"
  },
  {
    "English": "new",
    "Turkish": "yeni"
  },
  {
    "English": "work",
    "Turkish": "iş"
  },
  {
    "English": "part",
    "Turkish": "bölüm"
  },
  {
    "English": "take",
    "Turkish": "al"
  },
  {
    "English": "get",
    "Turkish": "al"
  },
  {
    "English": "place",
    "Turkish": "yer"
  },
  {
    "English": "made",
    "Turkish": "yapılan"
  },
  {
    "English": "live",
    "Turkish": "canlı"
  },
  {
    "English": "where",
    "Turkish": "nerede"
  },
  {
    "English": "after",
    "Turkish": "sonra"
  },
  {
    "English": "back",
    "Turkish": "geri"
  },
  {
    "English": "little",
    "Turkish": "küçük"
  },
  {
    "English": "only",
    "Turkish": "sadece"
  },
  {
    "English": "round",
    "Turkish": "yuvarlak"
  },
  {
    "English": "man",
    "Turkish": "adam"
  },
  {
    "English": "year",
    "Turkish": "yıl"
  },
  {
    "English": "came",
    "Turkish": "geldi"
  },
  {
    "English": "show",
    "Turkish": "göster"
  },
  {
    "English": "every",
    "Turkish": "her"
  },
  {
    "English": "good",
    "Turkish": "iyi"
  },
  {
    "English": "me",
    "Turkish": "bana"
  },
  {
    "English": "give",
    "Turkish": "ver"
  },
  {
    "English": "our",
    "Turkish": "bizim"
  },
  {
    "English": "under",
    "Turkish": "altında"
  },
  {
    "English": "name",
    "Turkish": "adı"
  },
  {
    "English": "very",
    "Turkish": "çok"
  },
  {
    "English": "through",
    "Turkish": "üzerinden"
  },
  {
    "English": "just",
    "Turkish": "sadece"
  },
  {
    "English": "form",
    "Turkish": "form"
  },
  {
    "English": "sentence",
    "Turkish": "cümle"
  },
  {
    "English": "great",
    "Turkish": "harika"
  },
  {
    "English": "think",
    "Turkish": "sanırım"
  },
  {
    "English": "say",
    "Turkish": "demek"
  },
  {
    "English": "help",
    "Turkish": "yardım"
  },
  {
    "English": "low",
    "Turkish": "düşük"
  },
  {
    "English": "line",
    "Turkish": "çizgi"
  },
  {
    "English": "differ",
    "Turkish": "farklı"
  },
  {
    "English": "turn",
    "Turkish": "dön"
  },
  {
    "English": "cause",
    "Turkish": "neden"
  },
  {
    "English": "much",
    "Turkish": "çok"
  },
  {
    "English": "mean",
    "Turkish": "demek"
  },
  {
    "English": "before",
    "Turkish": "önce"
  },
  {
    "English": "move",
    "Turkish": "hareket"
  },
  {
    "English": "right",
    "Turkish": "doğru"
  },
  {
    "English": "boy",
    "Turkish": "çocuk"
  },
  {
    "English": "old",
    "Turkish": "eski"
  },
  {
    "English": "too",
    "Turkish": "çok"
  },
  {
    "English": "same",
    "Turkish": "aynı"
  },
  {
    "English": "tell",
    "Turkish": "söyle"
  },
  {
    "English": "does",
    "Turkish": "yok"
  },
  {
    "English": "set",
    "Turkish": "set"
  },
  {
    "English": "three",
    "Turkish": "üç"
  },
  {
    "English": "want",
    "Turkish": "istiyorum"
  },
  {
    "English": "air",
    "Turkish": "hava"
  },
  {
    "English": "well",
    "Turkish": "iyi"
  },
  {
    "English": "also",
    "Turkish": "ayrıca"
  },
  {
    "English": "play",
    "Turkish": "oyun"
  },
  {
    "English": "small",
    "Turkish": "küçük"
  },
  {
    "English": "end",
    "Turkish": "son"
  },
  {
    "English": "put",
    "Turkish": "koy"
  },
  {
    "English": "home",
    "Turkish": "ev"
  },
  {
    "English": "read",
    "Turkish": "oku"
  },
  {
    "English": "hand",
    "Turkish": "el"
  },
  {
    "English": "port",
    "Turkish": "port"
  },
  {
    "English": "large",
    "Turkish": "büyük"
  },
  {
    "English": "spell",
    "Turkish": "büyü"
  },
  {
    "English": "add",
    "Turkish": "Ekle"
  },
  {
    "English": "even",
    "Turkish": "hatta"
  },
  {
    "English": "land",
    "Turkish": "arazi"
  },
  {
    "English": "here",
    "Turkish": "burada"
  },
  {
    "English": "must",
    "Turkish": "gerekir"
  },
  {
    "English": "big",
    "Turkish": "büyük"
  },
  {
    "English": "high",
    "Turkish": "yüksek"
  },
  {
    "English": "such",
    "Turkish": "böyle"
  },
  {
    "English": "follow",
    "Turkish": "izleyin"
  },
  {
    "English": "act",
    "Turkish": "hareket"
  },
  {
    "English": "why",
    "Turkish": "neden"
  },
  {
    "English": "ask",
    "Turkish": "sor"
  },
  {
    "English": "men",
    "Turkish": "erkekler"
  },
  {
    "English": "change",
    "Turkish": "değiştirin"
  },
  {
    "English": "went",
    "Turkish": "gitti"
  },
  {
    "English": "light",
    "Turkish": "ışık"
  },
  {
    "English": "kind",
    "Turkish": "tür"
  },
  {
    "English": "off",
    "Turkish": "kapalı"
  },
  {
    "English": "need",
    "Turkish": "gerek"
  },
  {
    "English": "house",
    "Turkish": "ev"
  },
  {
    "English": "picture",
    "Turkish": "resim"
  },
  {
    "English": "try",
    "Turkish": "deneyin"
  },
  {
    "English": "us",
    "Turkish": "bize"
  },
  {
    "English": "again",
    "Turkish": "tekrar"
  },
  {
    "English": "animal",
    "Turkish": "hayvan"
  },
  {
    "English": "point",
    "Turkish": "nokta"
  },
  {
    "English": "mother",
    "Turkish": "anne"
  },
  {
    "English": "world",
    "Turkish": "dünya"
  },
  {
    "English": "near",
    "Turkish": "yakın"
  },
  {
    "English": "build",
    "Turkish": "yapı"
  },
  {
    "English": "self",
    "Turkish": "kendini"
  },
  {
    "English": "earth",
    "Turkish": "dünya"
  },
  {
    "English": "father",
    "Turkish": "baba"
  },
  {
    "English": "head",
    "Turkish": "kafa"
  },
  {
    "English": "stand",
    "Turkish": "stand"
  },
  {
    "English": "own",
    "Turkish": "kendi"
  },
  {
    "English": "page",
    "Turkish": "sayfa"
  },
  {
    "English": "should",
    "Turkish": "gerekir"
  },
  {
    "English": "country",
    "Turkish": "ülke"
  },
  {
    "English": "found",
    "Turkish": "bulundu"
  },
  {
    "English": "answer",
    "Turkish": "cevap"
  },
  {
    "English": "school",
    "Turkish": "okul"
  },
  {
    "English": "grow",
    "Turkish": "büyümek"
  },
  {
    "English": "study",
    "Turkish": "çalışma"
  },
  {
    "English": "still",
    "Turkish": "hala"
  },
  {
    "English": "learn",
    "Turkish": "öğrenmek"
  },
  {
    "English": "plant",
    "Turkish": "bitki"
  },
  {
    "English": "cover",
    "Turkish": "kapak"
  },
  {
    "English": "food",
    "Turkish": "gıda"
  },
  {
    "English": "sun",
    "Turkish": "güneş"
  },
  {
    "English": "four",
    "Turkish": "dört"
  },
  {
    "English": "between",
    "Turkish": "arasında"
  },
  {
    "English": "state",
    "Turkish": "devlet"
  },
  {
    "English": "keep",
    "Turkish": "devam et"
  },
  {
    "English": "eye",
    "Turkish": "göz"
  },
  {
    "English": "never",
    "Turkish": "asla"
  },
  {
    "English": "last",
    "Turkish": "son"
  },
  {
    "English": "let",
    "Turkish": "hadi"
  },
  {
    "English": "thought",
    "Turkish": "düşünce"
  },
  {
    "English": "city",
    "Turkish": "şehir"
  },
  {
    "English": "tree",
    "Turkish": "ağaç"
  },
  {
    "English": "cross",
    "Turkish": "çapraz"
  },
  {
    "English": "farm",
    "Turkish": "çiftlik"
  },
  {
    "English": "hard",
    "Turkish": "zor"
  },
  {
    "English": "start",
    "Turkish": "Başlat"
  },
  {
    "English": "might",
    "Turkish": "olabilir"
  },
  {
    "English": "story",
    "Turkish": "hikaye"
  },
  {
    "English": "saw",
    "Turkish": "gördüm"
  },
  {
    "English": "far",
    "Turkish": "çok"
  },
  {
    "English": "sea",
    "Turkish": "deniz"
  },
  {
    "English": "draw",
    "Turkish": "çizmek"
  },
  {
    "English": "left",
    "Turkish": "sol"
  },
  {
    "English": "late",
    "Turkish": "geç"
  },
  {
    "English": "run",
    "Turkish": "çalıştırmak"
  },
  {
    "English": "don't",
    "Turkish": "yapma"
  },
  {
    "English": "while",
    "Turkish": "süre"
  },
  {
    "English": "press",
    "Turkish": "basın"
  },
  {
    "English": "close",
    "Turkish": "yakın"
  },
  {
    "English": "night",
    "Turkish": "gece"
  },
  {
    "English": "real",
    "Turkish": "gerçek"
  },
  {
    "English": "life",
    "Turkish": "hayat"
  },
  {
    "English": "few",
    "Turkish": "birkaç"
  },
  {
    "English": "north",
    "Turkish": "Kuzey"
  },
  {
    "English": "open",
    "Turkish": "açın"
  },
  {
    "English": "seem",
    "Turkish": "görünüyor"
  },
  {
    "English": "together",
    "Turkish": "birlikte"
  },
  {
    "English": "next",
    "Turkish": "gelecek"
  },
  {
    "English": "white",
    "Turkish": "beyaz"
  },
  {
    "English": "children",
    "Turkish": "çocuklar"
  },
  {
    "English": "begin",
    "Turkish": "başlar"
  },
  {
    "English": "got",
    "Turkish": "var"
  },
  {
    "English": "walk",
    "Turkish": "yürüyüş"
  },
  {
    "English": "example",
    "Turkish": "örnek"
  },
  {
    "English": "ease",
    "Turkish": "kolaylığı"
  },
  {
    "English": "paper",
    "Turkish": "kağıt"
  },
  {
    "English": "group",
    "Turkish": "grup"
  },
  {
    "English": "always",
    "Turkish": "her zaman"
  },
  {
    "English": "music",
    "Turkish": "müzik"
  },
  {
    "English": "those",
    "Turkish": "bu"
  },
  {
    "English": "both",
    "Turkish": "her ikisi de"
  },
  {
    "English": "mark",
    "Turkish": "mark"
  },
  {
    "English": "often",
    "Turkish": "sık sık"
  },
  {
    "English": "letter",
    "Turkish": "mektup"
  },
  {
    "English": "until",
    "Turkish": "kadar"
  },
  {
    "English": "mile",
    "Turkish": "mil"
  },
  {
    "English": "river",
    "Turkish": "nehir"
  },
  {
    "English": "car",
    "Turkish": "araba"
  },
  {
    "English": "feet",
    "Turkish": "ayak"
  },
  {
    "English": "care",
    "Turkish": "bakım"
  },
  {
    "English": "second",
    "Turkish": "ikinci"
  },
  {
    "English": "book",
    "Turkish": "kitap"
  },
  {
    "English": "carry",
    "Turkish": "taşıma"
  },
  {
    "English": "took",
    "Turkish": "aldı"
  },
  {
    "English": "science",
    "Turkish": "bilim"
  },
  {
    "English": "eat",
    "Turkish": "yemek"
  },
  {
    "English": "room",
    "Turkish": "oda"
  },
  {
    "English": "friend",
    "Turkish": "arkadaşım"
  },
  {
    "English": "began",
    "Turkish": "başladı"
  },
  {
    "English": "idea",
    "Turkish": "fikir"
  },
  {
    "English": "fish",
    "Turkish": "balık"
  },
  {
    "English": "mountain",
    "Turkish": "dağ"
  },
  {
    "English": "stop",
    "Turkish": "dur"
  },
  {
    "English": "once",
    "Turkish": "bir kez"
  },
  {
    "English": "base",
    "Turkish": "temel"
  },
  {
    "English": "hear",
    "Turkish": "duymak"
  },
  {
    "English": "horse",
    "Turkish": "at"
  },
  {
    "English": "cut",
    "Turkish": "kes"
  },
  {
    "English": "sure",
    "Turkish": "emin"
  },
  {
    "English": "watch",
    "Turkish": "izle"
  },
  {
    "English": "color",
    "Turkish": "renk"
  },
  {
    "English": "face",
    "Turkish": "yüz"
  },
  {
    "English": "wood",
    "Turkish": "ahşap"
  },
  {
    "English": "main",
    "Turkish": "ana"
  },
  {
    "English": "enough",
    "Turkish": "yeterli"
  },
  {
    "English": "plain",
    "Turkish": "düz"
  },
  {
    "English": "girl",
    "Turkish": "kız"
  },
  {
    "English": "usual",
    "Turkish": "her zamanki"
  },
  {
    "English": "young",
    "Turkish": "genç"
  },
  {
    "English": "ready",
    "Turkish": "hazır"
  },
  {
    "English": "above",
    "Turkish": "yukarıdaki"
  },
  {
    "English": "ever",
    "Turkish": "hiç"
  },
  {
    "English": "red",
    "Turkish": "kırmızı"
  },
  {
    "English": "list",
    "Turkish": "liste"
  },
  {
    "English": "though",
    "Turkish": "ama"
  },
  {
    "English": "feel",
    "Turkish": "hissediyorum"
  },
  {
    "English": "talk",
    "Turkish": "konuşma"
  },
  {
    "English": "bird",
    "Turkish": "kuş"
  },
  {
    "English": "soon",
    "Turkish": "yakında"
  },
  {
    "English": "body",
    "Turkish": "vücut"
  },
  {
    "English": "dog",
    "Turkish": "köpek"
  },
  {
    "English": "family",
    "Turkish": "aile"
  },
  {
    "English": "direct",
    "Turkish": "direkt"
  },
  {
    "English": "pose",
    "Turkish": "poz"
  },
  {
    "English": "leave",
    "Turkish": "bırakın"
  },
  {
    "English": "song",
    "Turkish": "şarkı"
  },
  {
    "English": "measure",
    "Turkish": "ölçü"
  },
  {
    "English": "door",
    "Turkish": "kapı"
  },
  {
    "English": "product",
    "Turkish": "ürün"
  },
  {
    "English": "black",
    "Turkish": "siyah"
  },
  {
    "English": "short",
    "Turkish": "kısa"
  },
  {
    "English": "numeral",
    "Turkish": "sayı"
  },
  {
    "English": "class",
    "Turkish": "sınıf"
  },
  {
    "English": "wind",
    "Turkish": "rüzgar"
  },
  {
    "English": "question",
    "Turkish": "soru"
  },
  {
    "English": "happen",
    "Turkish": "olur"
  },
  {
    "English": "complete",
    "Turkish": "tam"
  },
  {
    "English": "ship",
    "Turkish": "gemi"
  },
  {
    "English": "area",
    "Turkish": "alan"
  },
  {
    "English": "half",
    "Turkish": "yarım"
  },
  {
    "English": "rock",
    "Turkish": "Kaya"
  },
  {
    "English": "order",
    "Turkish": "sipariş"
  },
  {
    "English": "fire",
    "Turkish": "yangın"
  },
  {
    "English": "south",
    "Turkish": "Güney"
  },
  {
    "English": "problem",
    "Turkish": "sorun"
  },
  {
    "English": "piece",
    "Turkish": "parça"
  },
  {
    "English": "told",
    "Turkish": "söyledi"
  },
  {
    "English": "knew",
    "Turkish": "biliyordu"
  },
  {
    "English": "pass",
    "Turkish": "pass"
  },
  {
    "English": "since",
    "Turkish": "beri"
  },
  {
    "English": "top",
    "Turkish": "üst"
  },
  {
    "English": "whole",
    "Turkish": "tüm"
  },
  {
    "English": "king",
    "Turkish": "Kral"
  },
  {
    "English": "space",
    "Turkish": "uzay"
  },
  {
    "English": "heard",
    "Turkish": "duydum"
  },
  {
    "English": "best",
    "Turkish": "en iyi"
  },
  {
    "English": "hour",
    "Turkish": "saat"
  },
  {
    "English": "better",
    "Turkish": "daha iyi"
  },
  {
    "English": "true",
    "Turkish": "gerçek"
  },
  {
    "English": "during",
    "Turkish": "sırasında"
  },
  {
    "English": "hundred",
    "Turkish": "yüz"
  },
  {
    "English": "five",
    "Turkish": "beş"
  },
  {
    "English": "remember",
    "Turkish": "unutma"
  },
  {
    "English": "step",
    "Turkish": "adım"
  },
  {
    "English": "early",
    "Turkish": "erken"
  },
  {
    "English": "hold",
    "Turkish": "tutun"
  },
  {
    "English": "west",
    "Turkish": "Batı"
  },
  {
    "English": "ground",
    "Turkish": "zemin"
  },
  {
    "English": "interest",
    "Turkish": "faiz"
  },
  {
    "English": "reach",
    "Turkish": "ulaşmak"
  },
  {
    "English": "fast",
    "Turkish": "hızlı"
  },
  {
    "English": "verb",
    "Turkish": "fiil"
  },
  {
    "English": "sing",
    "Turkish": "şarkı"
  },
  {
    "English": "listen",
    "Turkish": "dinle"
  },
  {
    "English": "six",
    "Turkish": "altı"
  },
  {
    "English": "table",
    "Turkish": "tablo"
  },
  {
    "English": "travel",
    "Turkish": "Seyahat"
  },
  {
    "English": "less",
    "Turkish": "daha az"
  },
  {
    "English": "morning",
    "Turkish": "sabah"
  },
  {
    "English": "ten",
    "Turkish": "on"
  },
  {
    "English": "simple",
    "Turkish": "basit"
  },
  {
    "English": "several",
    "Turkish": "birkaç"
  },
  {
    "English": "vowel",
    "Turkish": "sesli harf"
  },
  {
    "English": "toward",
    "Turkish": "doğru"
  },
  {
    "English": "war",
    "Turkish": "savaş"
  },
  {
    "English": "lay",
    "Turkish": "lay"
  },
  {
    "English": "against",
    "Turkish": "karşı"
  },
  {
    "English": "pattern",
    "Turkish": "desen"
  },
  {
    "English": "slow",
    "Turkish": "yavaş"
  },
  {
    "English": "center",
    "Turkish": "merkezi"
  },
  {
    "English": "love",
    "Turkish": "aşk"
  },
  {
    "English": "person",
    "Turkish": "kişi"
  },
  {
    "English": "money",
    "Turkish": "para"
  },
  {
    "English": "serve",
    "Turkish": "hizmet"
  },
  {
    "English": "appear",
    "Turkish": "görünür"
  },
  {
    "English": "road",
    "Turkish": "yol"
  },
  {
    "English": "map",
    "Turkish": "harita"
  },
  {
    "English": "rain",
    "Turkish": "yağmur"
  },
  {
    "English": "rule",
    "Turkish": "kural"
  },
  {
    "English": "govern",
    "Turkish": "tabi"
  },
  {
    "English": "pull",
    "Turkish": "çekin"
  },
  {
    "English": "cold",
    "Turkish": "soğuk"
  },
  {
    "English": "notice",
    "Turkish": "dikkat edin"
  },
  {
    "English": "voice",
    "Turkish": "ses"
  },
  {
    "English": "unit",
    "Turkish": "birim"
  },
  {
    "English": "power",
    "Turkish": "güç"
  },
  {
    "English": "town",
    "Turkish": "şehir"
  },
  {
    "English": "fine",
    "Turkish": "iyi"
  },
  {
    "English": "certain",
    "Turkish": "belli"
  },
  {
    "English": "fly",
    "Turkish": "sinek"
  },
  {
    "English": "fall",
    "Turkish": "sonbahar"
  },
  {
    "English": "lead",
    "Turkish": "kurşun"
  },
  {
    "English": "cry",
    "Turkish": "ağlamak"
  },
  {
    "English": "dark",
    "Turkish": "karanlık"
  },
  {
    "English": "machine",
    "Turkish": "makine"
  },
  {
    "English": "note",
    "Turkish": "not"
  },
  {
    "English": "wait",
    "Turkish": "bekle"
  },
  {
    "English": "plan",
    "Turkish": "plan"
  },
  {
    "English": "figure",
    "Turkish": "şekil"
  },
  {
    "English": "star",
    "Turkish": "yıldız"
  },
  {
    "English": "box",
    "Turkish": "kutusu"
  },
  {
    "English": "noun",
    "Turkish": "isim"
  },
  {
    "English": "field",
    "Turkish": "alan"
  },
  {
    "English": "rest",
    "Turkish": "dinlenme"
  },
  {
    "English": "correct",
    "Turkish": "doğru"
  },
  {
    "English": "able",
    "Turkish": "mümkün"
  },
  {
    "English": "pound",
    "Turkish": "pound"
  },
  {
    "English": "done",
    "Turkish": "bitti"
  },
  {
    "English": "beauty",
    "Turkish": "güzellik"
  },
  {
    "English": "drive",
    "Turkish": "sürücü"
  },
  {
    "English": "stood",
    "Turkish": "durdu"
  },
  {
    "English": "contain",
    "Turkish": "içerir"
  },
  {
    "English": "front",
    "Turkish": "ön"
  },
  {
    "English": "teach",
    "Turkish": "öğretmek"
  },
  {
    "English": "week",
    "Turkish": "hafta"
  },
  {
    "English": "final",
    "Turkish": "son"
  },
  {
    "English": "gave",
    "Turkish": "verdi"
  },
  {
    "English": "green",
    "Turkish": "yeşil"
  },
  {
    "English": "oh",
    "Turkish": "oh"
  },
  {
    "English": "quick",
    "Turkish": "hızlı"
  },
  {
    "English": "develop",
    "Turkish": "geliştirmek"
  },
  {
    "English": "ocean",
    "Turkish": "okyanus"
  },
  {
    "English": "warm",
    "Turkish": "sıcak"
  },
  {
    "English": "free",
    "Turkish": "ücretsiz"
  },
  {
    "English": "minute",
    "Turkish": "dakika"
  },
  {
    "English": "strong",
    "Turkish": "güçlü"
  },
  {
    "English": "special",
    "Turkish": "özel"
  },
  {
    "English": "mind",
    "Turkish": "zihin"
  },
  {
    "English": "behind",
    "Turkish": "arkasında"
  },
  {
    "English": "clear",
    "Turkish": "açık"
  },
  {
    "English": "tail",
    "Turkish": "kuyruk"
  },
  {
    "English": "produce",
    "Turkish": "üretmek"
  },
  {
    "English": "fact",
    "Turkish": "aslında"
  },
  {
    "English": "street",
    "Turkish": "sokak"
  },
  {
    "English": "inch",
    "Turkish": "inç"
  },
  {
    "English": "multiply",
    "Turkish": "çarpma"
  },
  {
    "English": "nothing",
    "Turkish": "hiçbir şey"
  },
  {
    "English": "course",
    "Turkish": "ders"
  },
  {
    "English": "stay",
    "Turkish": "kal"
  },
  {
    "English": "wheel",
    "Turkish": "tekerlek"
  },
  {
    "English": "full",
    "Turkish": "tam"
  },
  {
    "English": "force",
    "Turkish": "kuvvet"
  },
  {
    "English": "blue",
    "Turkish": "mavi"
  },
  {
    "English": "object",
    "Turkish": "nesne"
  },
  {
    "English": "decide",
    "Turkish": "karar"
  },
  {
    "English": "surface",
    "Turkish": "yüzey"
  },
  {
    "English": "deep",
    "Turkish": "derin"
  },
  {
    "English": "moon",
    "Turkish": "ay"
  },
  {
    "English": "island",
    "Turkish": "ada"
  },
  {
    "English": "foot",
    "Turkish": "ayak"
  },
  {
    "English": "system",
    "Turkish": "sistem"
  },
  {
    "English": "busy",
    "Turkish": "meşgul"
  },
  {
    "English": "test",
    "Turkish": "test"
  },
  {
    "English": "record",
    "Turkish": "kayıt"
  },
  {
    "English": "boat",
    "Turkish": "tekne"
  },
  {
    "English": "common",
    "Turkish": "ortak"
  },
  {
    "English": "gold",
    "Turkish": "altın"
  },
  {
    "English": "possible",
    "Turkish": "mümkün"
  },
  {
    "English": "plane",
    "Turkish": "uçak"
  },
  {
    "English": "stead",
    "Turkish": "yerine"
  },
  {
    "English": "dry",
    "Turkish": "kuru"
  },
  {
    "English": "wonder",
    "Turkish": "acaba"
  },
  {
    "English": "laugh",
    "Turkish": "gülmek"
  },
  {
    "English": "thousand",
    "Turkish": "bin"
  },
  {
    "English": "ago",
    "Turkish": "önce"
  },
  {
    "English": "ran",
    "Turkish": "koştu"
  },
  {
    "English": "check",
    "Turkish": "kontrol"
  },
  {
    "English": "game",
    "Turkish": "oyun"
  },
  {
    "English": "shape",
    "Turkish": "şekil"
  },
  {
    "English": "equate",
    "Turkish": "eşit"
  },
  {
    "English": "hot",
    "Turkish": "sıcak"
  },
  {
    "English": "miss",
    "Turkish": "Bayan"
  },
  {
    "English": "brought",
    "Turkish": "getirdi"
  },
  {
    "English": "heat",
    "Turkish": "ısı"
  },
  {
    "English": "snow",
    "Turkish": "kar"
  },
  {
    "English": "tire",
    "Turkish": "lastik"
  },
  {
    "English": "bring",
    "Turkish": "getir"
  },
  {
    "English": "yes",
    "Turkish": "Evet"
  },
  {
    "English": "distant",
    "Turkish": "uzak"
  },
  {
    "English": "fill",
    "Turkish": "dolgu"
  },
  {
    "English": "east",
    "Turkish": "Doğu"
  },
  {
    "English": "paint",
    "Turkish": "boya"
  },
  {
    "English": "language",
    "Turkish": "dil"
  },
  {
    "English": "among",
    "Turkish": "arasında"
  },
  {
    "English": "grand",
    "Turkish": "grand"
  },
  {
    "English": "ball",
    "Turkish": "top"
  },
  {
    "English": "yet",
    "Turkish": "henüz"
  },
  {
    "English": "wave",
    "Turkish": "dalga"
  },
  {
    "English": "drop",
    "Turkish": "bırak"
  },
  {
    "English": "heart",
    "Turkish": "kalp"
  },
  {
    "English": "am",
    "Turkish": "am"
  },
  {
    "English": "present",
    "Turkish": "mevcut"
  },
  {
    "English": "heavy",
    "Turkish": "ağır"
  },
  {
    "English": "dance",
    "Turkish": "dans"
  },
  {
    "English": "engine",
    "Turkish": "motoru"
  },
  {
    "English": "position",
    "Turkish": "pozisyon"
  },
  {
    "English": "arm",
    "Turkish": "kol"
  },
  {
    "English": "wide",
    "Turkish": "geniş"
  },
  {
    "English": "sail",
    "Turkish": "yelken"
  },
  {
    "English": "material",
    "Turkish": "malzeme"
  },
  {
    "English": "size",
    "Turkish": "boyutu"
  },
  {
    "English": "vary",
    "Turkish": "değişir"
  },
  {
    "English": "settle",
    "Turkish": "yerleşmek"
  },
  {
    "English": "speak",
    "Turkish": "konuş"
  },
  {
    "English": "weight",
    "Turkish": "ağırlık"
  },
  {
    "English": "general",
    "Turkish": "genel"
  },
  {
    "English": "ice",
    "Turkish": "buz"
  },
  {
    "English": "matter",
    "Turkish": "konu"
  },
  {
    "English": "circle",
    "Turkish": "Daire"
  },
  {
    "English": "pair",
    "Turkish": "çift"
  },
  {
    "English": "include",
    "Turkish": "vardır"
  },
  {
    "English": "divide",
    "Turkish": "böl"
  },
  {
    "English": "syllable",
    "Turkish": "hece"
  },
  {
    "English": "felt",
    "Turkish": "hissettim"
  },
  {
    "English": "perhaps",
    "Turkish": "belki de"
  },
  {
    "English": "pick",
    "Turkish": "al"
  },
  {
    "English": "sudden",
    "Turkish": "ani"
  },
  {
    "English": "count",
    "Turkish": "sayısı"
  },
  {
    "English": "square",
    "Turkish": "Kare"
  },
  {
    "English": "reason",
    "Turkish": "nedeni"
  },
  {
    "English": "length",
    "Turkish": "uzunluğu"
  },
  {
    "English": "represent",
    "Turkish": "temsil"
  },
  {
    "English": "art",
    "Turkish": "sanat"
  },
  {
    "English": "subject",
    "Turkish": "konu"
  },
  {
    "English": "region",
    "Turkish": "bölge"
  },
  {
    "English": "energy",
    "Turkish": "enerji"
  },
  {
    "English": "hunt",
    "Turkish": "hunt"
  },
  {
    "English": "probable",
    "Turkish": "muhtemel"
  },
  {
    "English": "bed",
    "Turkish": "yatak"
  },
  {
    "English": "brother",
    "Turkish": "kardeşim"
  },
  {
    "English": "egg",
    "Turkish": "yumurta"
  },
  {
    "English": "ride",
    "Turkish": "yolculuk"
  },
  {
    "English": "cell",
    "Turkish": "hücre"
  },
  {
    "English": "believe",
    "Turkish": "inanıyorum"
  },
  {
    "English": "fraction",
    "Turkish": "kesir"
  },
  {
    "English": "forest",
    "Turkish": "orman"
  },
  {
    "English": "sit",
    "Turkish": "otur"
  },
  {
    "English": "race",
    "Turkish": "yarış"
  },
  {
    "English": "window",
    "Turkish": "pencere"
  },
  {
    "English": "store",
    "Turkish": "mağaza"
  },
  {
    "English": "summer",
    "Turkish": "yaz"
  },
  {
    "English": "train",
    "Turkish": "tren"
  },
  {
    "English": "sleep",
    "Turkish": "uyku"
  },
  {
    "English": "prove",
    "Turkish": "ispat"
  },
  {
    "English": "lone",
    "Turkish": "yalnız"
  },
  {
    "English": "leg",
    "Turkish": "bacak"
  },
  {
    "English": "exercise",
    "Turkish": "egzersiz"
  },
  {
    "English": "wall",
    "Turkish": "duvar"
  },
  {
    "English": "catch",
    "Turkish": "yakalamak"
  },
  {
    "English": "mount",
    "Turkish": "mount"
  },
  {
    "English": "wish",
    "Turkish": "keşke"
  },
  {
    "English": "sky",
    "Turkish": "gökyüzü"
  },
  {
    "English": "board",
    "Turkish": "Yönetim Kurulu"
  },
  {
    "English": "joy",
    "Turkish": "sevinç"
  },
  {
    "English": "winter",
    "Turkish": "kış"
  },
  {
    "English": "sat",
    "Turkish": "sat"
  },
  {
    "English": "written",
    "Turkish": "yazılı"
  },
  {
    "English": "wild",
    "Turkish": "vahşi"
  },
  {
    "English": "instrument",
    "Turkish": "enstrüman"
  },
  {
    "English": "kept",
    "Turkish": "tuttu"
  },
  {
    "English": "glass",
    "Turkish": "cam"
  },
  {
    "English": "grass",
    "Turkish": "ot"
  },
  {
    "English": "cow",
    "Turkish": "inek"
  },
  {
    "English": "job",
    "Turkish": "iş"
  },
  {
    "English": "edge",
    "Turkish": "kenar"
  },
  {
    "English": "sign",
    "Turkish": "tabela"
  },
  {
    "English": "visit",
    "Turkish": "ziyaret"
  },
  {
    "English": "past",
    "Turkish": "geçmiş"
  },
  {
    "English": "soft",
    "Turkish": "yumuşak"
  },
  {
    "English": "fun",
    "Turkish": "eğlenceli"
  },
  {
    "English": "bright",
    "Turkish": "parlak"
  },
  {
    "English": "gas",
    "Turkish": "gaz"
  },
  {
    "English": "weather",
    "Turkish": "hava durumu"
  },
  {
    "English": "month",
    "Turkish": "ay"
  },
  {
    "English": "million",
    "Turkish": "milyon"
  },
  {
    "English": "bear",
    "Turkish": "ayı"
  },
  {
    "English": "finish",
    "Turkish": "bitir"
  },
  {
    "English": "happy",
    "Turkish": "mutlu"
  },
  {
    "English": "hope",
    "Turkish": "umut"
  },
  {
    "English": "flower",
    "Turkish": "çiçek"
  },
  {
    "English": "clothe",
    "Turkish": "giydirin"
  },
  {
    "English": "strange",
    "Turkish": "garip"
  },
  {
    "English": "gone",
    "Turkish": "gitti"
  },
  {
    "English": "jump",
    "Turkish": "atlama"
  },
  {
    "English": "baby",
    "Turkish": "bebek"
  },
  {
    "English": "eight",
    "Turkish": "sekiz"
  },
  {
    "English": "village",
    "Turkish": "köy"
  },
  {
    "English": "meet",
    "Turkish": "tanışma"
  },
  {
    "English": "root",
    "Turkish": "kök"
  },
  {
    "English": "buy",
    "Turkish": "satın al"
  },
  {
    "English": "raise",
    "Turkish": "zam"
  },
  {
    "English": "solve",
    "Turkish": "çözmek"
  },
  {
    "English": "metal",
    "Turkish": "metal"
  },
  {
    "English": "whether",
    "Turkish": "olsun"
  },
  {
    "English": "push",
    "Turkish": "itin"
  },
  {
    "English": "seven",
    "Turkish": "yedi"
  },
  {
    "English": "paragraph",
    "Turkish": "paragraf"
  },
  {
    "English": "third",
    "Turkish": "üçüncü"
  },
  {
    "English": "shall",
    "Turkish": "olacaktır"
  },
  {
    "English": "held",
    "Turkish": "düzenlenen"
  },
  {
    "English": "hair",
    "Turkish": "saç"
  },
  {
    "English": "describe",
    "Turkish": "tarif"
  },
  {
    "English": "cook",
    "Turkish": "cook"
  },
  {
    "English": "floor",
    "Turkish": "zemin"
  },
  {
    "English": "either",
    "Turkish": "ya"
  },
  {
    "English": "result",
    "Turkish": "sonuç"
  },
  {
    "English": "burn",
    "Turkish": "yanık"
  },
  {
    "English": "hill",
    "Turkish": "hill"
  },
  {
    "English": "safe",
    "Turkish": "güvenli"
  },
  {
    "English": "cat",
    "Turkish": "kedi"
  },
  {
    "English": "century",
    "Turkish": "yüzyıl"
  },
  {
    "English": "consider",
    "Turkish": "düşünün"
  },
  {
    "English": "type",
    "Turkish": "yazın"
  },
  {
    "English": "law",
    "Turkish": "hukuk"
  },
  {
    "English": "bit",
    "Turkish": "bit"
  },
  {
    "English": "coast",
    "Turkish": "sahil"
  },
  {
    "English": "copy",
    "Turkish": "kopya"
  },
  {
    "English": "phrase",
    "Turkish": "cümle"
  },
  {
    "English": "silent",
    "Turkish": "sessiz"
  },
  {
    "English": "tall",
    "Turkish": "uzun boylu"
  },
  {
    "English": "sand",
    "Turkish": "kum"
  },
  {
    "English": "soil",
    "Turkish": "toprak"
  },
  {
    "English": "roll",
    "Turkish": "rulo"
  },
  {
    "English": "temperature",
    "Turkish": "sıcaklık"
  },
  {
    "English": "finger",
    "Turkish": "parmak"
  },
  {
    "English": "industry",
    "Turkish": "Sanayi"
  },
  {
    "English": "value",
    "Turkish": "değer"
  },
  {
    "English": "fight",
    "Turkish": "kavga"
  },
  {
    "English": "lie",
    "Turkish": "yalan"
  },
  {
    "English": "beat",
    "Turkish": "beat"
  },
  {
    "English": "excite",
    "Turkish": "excite"
  },
  {
    "English": "natural",
    "Turkish": "doğal"
  },
  {
    "English": "view",
    "Turkish": "görünüm"
  },
  {
    "English": "sense",
    "Turkish": "sense"
  },
  {
    "English": "ear",
    "Turkish": "kulak"
  },
  {
    "English": "else",
    "Turkish": "başka"
  },
  {
    "English": "quite",
    "Turkish": "oldukça"
  },
  {
    "English": "broke",
    "Turkish": "kırdı"
  },
  {
    "English": "case",
    "Turkish": "dava"
  },
  {
    "English": "middle",
    "Turkish": "orta"
  },
  {
    "English": "kill",
    "Turkish": "öldürmek"
  },
  {
    "English": "son",
    "Turkish": "oğlu"
  },
  {
    "English": "lake",
    "Turkish": "göl"
  },
  {
    "English": "moment",
    "Turkish": "an"
  },
  {
    "English": "scale",
    "Turkish": "ölçek"
  },
  {
    "English": "loud",
    "Turkish": "yüksek sesle"
  },
  {
    "English": "spring",
    "Turkish": "bahar"
  },
  {
    "English": "observe",
    "Turkish": "gözlemleyin"
  },
  {
    "English": "child",
    "Turkish": "çocuk"
  },
  {
    "English": "straight",
    "Turkish": "düz"
  },
  {
    "English": "consonant",
    "Turkish": "ünsüz"
  },
  {
    "English": "nation",
    "Turkish": "ulus"
  },
  {
    "English": "dictionary",
    "Turkish": "sözlük"
  },
  {
    "English": "milk",
    "Turkish": "süt"
  },
  {
    "English": "speed",
    "Turkish": "hız"
  },
  {
    "English": "method",
    "Turkish": "yöntem"
  },
  {
    "English": "organ",
    "Turkish": "organ"
  },
  {
    "English": "pay",
    "Turkish": "ödeme"
  },
  {
    "English": "age",
    "Turkish": "yaş"
  },
  {
    "English": "section",
    "Turkish": "bölüm"
  },
  {
    "English": "dress",
    "Turkish": "elbise"
  },
  {
    "English": "cloud",
    "Turkish": "bulut"
  },
  {
    "English": "surprise",
    "Turkish": "sürpriz"
  },
  {
    "English": "quiet",
    "Turkish": "sessiz"
  },
  {
    "English": "stone",
    "Turkish": "taş"
  },
  {
    "English": "tiny",
    "Turkish": "minik"
  },
  {
    "English": "climb",
    "Turkish": "tırmanış"
  },
  {
    "English": "cool",
    "Turkish": "cool"
  },
  {
    "English": "design",
    "Turkish": "tasarım"
  },
  {
    "English": "poor",
    "Turkish": "zavallı"
  },
  {
    "English": "lot",
    "Turkish": "çok"
  },
  {
    "English": "experiment",
    "Turkish": "deney"
  },
  {
    "English": "bottom",
    "Turkish": "alt"
  },
  {
    "English": "key",
    "Turkish": "anahtar"
  },
  {
    "English": "iron",
    "Turkish": "demir"
  },
  {
    "English": "single",
    "Turkish": "tek"
  },
  {
    "English": "stick",
    "Turkish": "sopa"
  },
  {
    "English": "flat",
    "Turkish": "düz"
  },
  {
    "English": "twenty",
    "Turkish": "yirmi"
  },
  {
    "English": "skin",
    "Turkish": "cilt"
  },
  {
    "English": "smile",
    "Turkish": "gülümseme"
  },
  {
    "English": "crease",
    "Turkish": "kırışık"
  },
  {
    "English": "hole",
    "Turkish": "delik"
  },
  {
    "English": "trade",
    "Turkish": "ticaret"
  },
  {
    "English": "melody",
    "Turkish": "melodi"
  },
  {
    "English": "trip",
    "Turkish": "Seyahat"
  },
  {
    "English": "office",
    "Turkish": "ofis"
  },
  {
    "English": "receive",
    "Turkish": "almak"
  },
  {
    "English": "row",
    "Turkish": "satır"
  },
  {
    "English": "mouth",
    "Turkish": "ağız"
  },
  {
    "English": "exact",
    "Turkish": "tam"
  },
  {
    "English": "symbol",
    "Turkish": "sembol"
  },
  {
    "English": "die",
    "Turkish": "ölmek"
  },
  {
    "English": "least",
    "Turkish": "en azından"
  },
  {
    "English": "trouble",
    "Turkish": "sorun"
  },
  {
    "English": "shout",
    "Turkish": "shout"
  },
  {
    "English": "except",
    "Turkish": "hariç"
  },
  {
    "English": "wrote",
    "Turkish": "yazdı"
  },
  {
    "English": "seed",
    "Turkish": "tohum"
  },
  {
    "English": "tone",
    "Turkish": "sesi"
  },
  {
    "English": "join",
    "Turkish": "katıl"
  },
  {
    "English": "suggest",
    "Turkish": "Öner"
  },
  {
    "English": "clean",
    "Turkish": "temiz"
  },
  {
    "English": "break",
    "Turkish": "Ara"
  },
  {
    "English": "lady",
    "Turkish": "Bayan"
  },
  {
    "English": "yard",
    "Turkish": "bahçe"
  },
  {
    "English": "rise",
    "Turkish": "yükselişi"
  },
  {
    "English": "bad",
    "Turkish": "kötü"
  },
  {
    "English": "blow",
    "Turkish": "darbe"
  },
  {
    "English": "oil",
    "Turkish": "petrol"
  },
  {
    "English": "blood",
    "Turkish": "kan"
  },
  {
    "English": "touch",
    "Turkish": "dokunmatik"
  },
  {
    "English": "grew",
    "Turkish": "büyüdü"
  },
  {
    "English": "cent",
    "Turkish": "yüzde"
  },
  {
    "English": "mix",
    "Turkish": "mix"
  },
  {
    "English": "team",
    "Turkish": "takım"
  },
  {
    "English": "wire",
    "Turkish": "Tel"
  },
  {
    "English": "cost",
    "Turkish": "maliyet"
  },
  {
    "English": "lost",
    "Turkish": "kayıp"
  },
  {
    "English": "brown",
    "Turkish": "kahverengi"
  },
  {
    "English": "wear",
    "Turkish": "giyim"
  },
  {
    "English": "garden",
    "Turkish": "bahçe"
  },
  {
    "English": "equal",
    "Turkish": "eşit"
  },
  {
    "English": "sent",
    "Turkish": "gönderildi"
  },
  {
    "English": "choose",
    "Turkish": "seçin"
  },
  {
    "English": "fell",
    "Turkish": "düştü"
  },
  {
    "English": "fit",
    "Turkish": "uygun"
  },
  {
    "English": "flow",
    "Turkish": "akış"
  },
  {
    "English": "fair",
    "Turkish": "adil"
  },
  {
    "English": "bank",
    "Turkish": "banka"
  },
  {
    "English": "collect",
    "Turkish": "toplamak"
  },
  {
    "English": "save",
    "Turkish": "Kaydet"
  },
  {
    "English": "control",
    "Turkish": "kontrol"
  },
  {
    "English": "decimal",
    "Turkish": "ondalık"
  },
  {
    "English": "gentle",
    "Turkish": "nazik"
  },
  {
    "English": "woman",
    "Turkish": "kadın"
  },
  {
    "English": "captain",
    "Turkish": "kaptan"
  },
  {
    "English": "practice",
    "Turkish": "uygulama"
  },
  {
    "English": "separate",
    "Turkish": "ayrı"
  },
  {
    "English": "difficult",
    "Turkish": "zor"
  },
  {
    "English": "doctor",
    "Turkish": "doktor"
  },
  {
    "English": "please",
    "Turkish": "lütfen"
  },
  {
    "English": "protect",
    "Turkish": "korumak"
  },
  {
    "English": "noon",
    "Turkish": "öğlen"
  },
  {
    "English": "whose",
    "Turkish": "kimin"
  },
  {
    "English": "locate",
    "Turkish": "bulun"
  },
  {
    "English": "ring",
    "Turkish": "yüzük"
  },
  {
    "English": "character",
    "Turkish": "karakter"
  },
  {
    "English": "insect",
    "Turkish": "böcek"
  },
  {
    "English": "caught",
    "Turkish": "yakalandı"
  },
  {
    "English": "period",
    "Turkish": "dönem"
  },
  {
    "English": "indicate",
    "Turkish": "belirtmek"
  },
  {
    "English": "radio",
    "Turkish": "radyo"
  },
  {
    "English": "spoke",
    "Turkish": "konuştu"
  },
  {
    "English": "atom",
    "Turkish": "atom"
  },
  {
    "English": "human",
    "Turkish": "insan"
  },
  {
    "English": "history",
    "Turkish": "tarih"
  },
  {
    "English": "effect",
    "Turkish": "etkisi"
  },
  {
    "English": "electric",
    "Turkish": "elektrik"
  },
  {
    "English": "expect",
    "Turkish": "bekliyoruz"
  },
  {
    "English": "crop",
    "Turkish": "ürün"
  },
  {
    "English": "modern",
    "Turkish": "modern"
  },
  {
    "English": "element",
    "Turkish": "eleman"
  },
  {
    "English": "hit",
    "Turkish": "hit"
  },
  {
    "English": "student",
    "Turkish": "öğrenci"
  },
  {
    "English": "corner",
    "Turkish": "köşe"
  },
  {
    "English": "party",
    "Turkish": "parti"
  },
  {
    "English": "supply",
    "Turkish": "tedarik"
  },
  {
    "English": "bone",
    "Turkish": "kemik"
  },
  {
    "English": "rail",
    "Turkish": "demiryolu"
  },
  {
    "English": "imagine",
    "Turkish": "hayal"
  },
  {
    "English": "provide",
    "Turkish": "sağlamak"
  },
  {
    "English": "agree",
    "Turkish": "katılıyorum"
  },
  {
    "English": "thus",
    "Turkish": "böylece"
  },
  {
    "English": "capital",
    "Turkish": "sermaye"
  },
  {
    "English": "won't",
    "Turkish": "olmaz"
  },
  {
    "English": "chair",
    "Turkish": "sandalye"
  },
  {
    "English": "danger",
    "Turkish": "tehlike"
  },
  {
    "English": "fruit",
    "Turkish": "meyve"
  },
  {
    "English": "rich",
    "Turkish": "zengin"
  },
  {
    "English": "thick",
    "Turkish": "kalın"
  },
  {
    "English": "soldier",
    "Turkish": "asker"
  },
  {
    "English": "process",
    "Turkish": "süreç"
  },
  {
    "English": "operate",
    "Turkish": "faaliyet"
  },
  {
    "English": "guess",
    "Turkish": "sanırım"
  },
  {
    "English": "necessary",
    "Turkish": "gerekli"
  },
  {
    "English": "sharp",
    "Turkish": "keskin"
  },
  {
    "English": "wing",
    "Turkish": "kanat"
  },
  {
    "English": "create",
    "Turkish": "oluşturun"
  },
  {
    "English": "neighbor",
    "Turkish": "komşu"
  },
  {
    "English": "wash",
    "Turkish": "yıkama"
  },
  {
    "English": "bat",
    "Turkish": "bat"
  },
  {
    "English": "rather",
    "Turkish": "oldukça"
  },
  {
    "English": "crowd",
    "Turkish": "kalabalık"
  },
  {
    "English": "corn",
    "Turkish": "Mısır"
  },
  {
    "English": "compare",
    "Turkish": "karşılaştırma"
  },
  {
    "English": "poem",
    "Turkish": "şiir"
  },
  {
    "English": "string",
    "Turkish": "dize"
  },
  {
    "English": "bell",
    "Turkish": "çan"
  },
  {
    "English": "depend",
    "Turkish": "bağlı"
  },
  {
    "English": "meat",
    "Turkish": "et"
  },
  {
    "English": "rub",
    "Turkish": "rub"
  },
  {
    "English": "tube",
    "Turkish": "tüp"
  },
  {
    "English": "famous",
    "Turkish": "ünlü"
  },
  {
    "English": "dollar",
    "Turkish": "dolar"
  },
  {
    "English": "stream",
    "Turkish": "stream"
  },
  {
    "English": "fear",
    "Turkish": "korku"
  },
  {
    "English": "sight",
    "Turkish": "görme"
  },
  {
    "English": "thin",
    "Turkish": "ince"
  },
  {
    "English": "triangle",
    "Turkish": "Üçgen"
  },
  {
    "English": "planet",
    "Turkish": "gezegen"
  },
  {
    "English": "hurry",
    "Turkish": "acele edin"
  },
  {
    "English": "chief",
    "Turkish": "şef"
  },
  {
    "English": "colony",
    "Turkish": "koloni"
  },
  {
    "English": "clock",
    "Turkish": "saat"
  },
  {
    "English": "mine",
    "Turkish": "benim"
  },
  {
    "English": "tie",
    "Turkish": "kravat"
  },
  {
    "English": "enter",
    "Turkish": "girin"
  },
  {
    "English": "major",
    "Turkish": "büyük"
  },
  {
    "English": "fresh",
    "Turkish": "taze"
  },
  {
    "English": "search",
    "Turkish": "arama"
  },
  {
    "English": "send",
    "Turkish": "gönder"
  },
  {
    "English": "yellow",
    "Turkish": "sarı"
  },
  {
    "English": "gun",
    "Turkish": "silah"
  },
  {
    "English": "allow",
    "Turkish": "izin ver"
  },
  {
    "English": "print",
    "Turkish": "baskı"
  },
  {
    "English": "dead",
    "Turkish": "ölü"
  },
  {
    "English": "spot",
    "Turkish": "spot"
  },
  {
    "English": "desert",
    "Turkish": "çöl"
  },
  {
    "English": "suit",
    "Turkish": "takım elbise"
  },
  {
    "English": "current",
    "Turkish": "geçerli"
  },
  {
    "English": "lift",
    "Turkish": "asansör"
  },
  {
    "English": "rose",
    "Turkish": "gül"
  },
  {
    "English": "continue",
    "Turkish": "devam"
  },
  {
    "English": "block",
    "Turkish": "blok"
  },
  {
    "English": "chart",
    "Turkish": "grafik"
  },
  {
    "English": "hat",
    "Turkish": "şapka"
  },
  {
    "English": "sell",
    "Turkish": "sat"
  },
  {
    "English": "success",
    "Turkish": "başarı"
  },
  {
    "English": "company",
    "Turkish": "şirket"
  },
  {
    "English": "subtract",
    "Turkish": "çıkarma"
  },
  {
    "English": "event",
    "Turkish": "olay"
  },
  {
    "English": "particular",
    "Turkish": "özellikle"
  },
  {
    "English": "deal",
    "Turkish": "anlaşma"
  },
  {
    "English": "swim",
    "Turkish": "yüzmek"
  },
  {
    "English": "term",
    "Turkish": "vadeli"
  },
  {
    "English": "opposite",
    "Turkish": "tam tersi"
  },
  {
    "English": "wife",
    "Turkish": "karısı"
  },
  {
    "English": "shoe",
    "Turkish": "ayakkabı"
  },
  {
    "English": "shoulder",
    "Turkish": "omuz"
  },
  {
    "English": "spread",
    "Turkish": "yayıldı"
  },
  {
    "English": "arrange",
    "Turkish": "düzenlemek"
  },
  {
    "English": "camp",
    "Turkish": "kamp"
  },
  {
    "English": "invent",
    "Turkish": "icat"
  },
  {
    "English": "cotton",
    "Turkish": "pamuk"
  },
  {
    "English": "born",
    "Turkish": "doğan"
  },
  {
    "English": "determine",
    "Turkish": "belirlemek"
  },
  {
    "English": "quart",
    "Turkish": "litre"
  },
  {
    "English": "nine",
    "Turkish": "dokuz"
  },
  {
    "English": "truck",
    "Turkish": "kamyon"
  },
  {
    "English": "noise",
    "Turkish": "gürültü"
  },
  {
    "English": "level",
    "Turkish": "seviye"
  },
  {
    "English": "chance",
    "Turkish": "şans"
  },
  {
    "English": "gather",
    "Turkish": "toplamak"
  },
  {
    "English": "shop",
    "Turkish": "alışveriş"
  },
  {
    "English": "stretch",
    "Turkish": "streç"
  },
  {
    "English": "throw",
    "Turkish": "at"
  },
  {
    "English": "shine",
    "Turkish": "parlaklık"
  },
  {
    "English": "property",
    "Turkish": "özellik"
  },
  {
    "English": "column",
    "Turkish": "sütun"
  },
  {
    "English": "molecule",
    "Turkish": "molekül"
  },
  {
    "English": "select",
    "Turkish": "seçin"
  },
  {
    "English": "wrong",
    "Turkish": "yanlış"
  },
  {
    "English": "gray",
    "Turkish": "gri"
  },
  {
    "English": "repeat",
    "Turkish": "tekrar"
  },
  {
    "English": "require",
    "Turkish": "gerektirir"
  },
  {
    "English": "broad",
    "Turkish": "geniş"
  },
  {
    "English": "prepare",
    "Turkish": "hazırlamak"
  },
  {
    "English": "salt",
    "Turkish": "tuz"
  },
  {
    "English": "nose",
    "Turkish": "burun"
  },
  {
    "English": "plural",
    "Turkish": "çoğul"
  },
  {
    "English": "anger",
    "Turkish": "öfke"
  },
  {
    "English": "claim",
    "Turkish": "iddia"
  },
  {
    "English": "continent",
    "Turkish": "kıta"
  },
  {
    "English": "oxygen",
    "Turkish": "oksijen"
  },
  {
    "English": "sugar",
    "Turkish": "şeker"
  },
  {
    "English": "death",
    "Turkish": "ölüm"
  },
  {
    "English": "pretty",
    "Turkish": "güzel"
  },
  {
    "English": "skill",
    "Turkish": "beceri"
  },
  {
    "English": "women",
    "Turkish": "kadınlar"
  },
  {
    "English": "season",
    "Turkish": "sezon"
  },
  {
    "English": "solution",
    "Turkish": "çözüm"
  },
  {
    "English": "magnet",
    "Turkish": "mıknatıs"
  },
  {
    "English": "silver",
    "Turkish": "Gümüş"
  },
  {
    "English": "thank",
    "Turkish": "teşekkürler"
  },
  {
    "English": "branch",
    "Turkish": "şube"
  },
  {
    "English": "match",
    "Turkish": "maç"
  },
  {
    "English": "suffix",
    "Turkish": "sonek"
  },
  {
    "English": "especially",
    "Turkish": "özellikle"
  },
  {
    "English": "fig",
    "Turkish": "incir"
  },
  {
    "English": "afraid",
    "Turkish": "korkarım"
  },
  {
    "English": "huge",
    "Turkish": "büyük"
  },
  {
    "English": "sister",
    "Turkish": "kardeş"
  },
  {
    "English": "steel",
    "Turkish": "çelik"
  },
  {
    "English": "discuss",
    "Turkish": "tartışmak"
  },
  {
    "English": "forward",
    "Turkish": "ileri"
  },
  {
    "English": "similar",
    "Turkish": "benzer"
  },
  {
    "English": "guide",
    "Turkish": "rehberi"
  },
  {
    "English": "experience",
    "Turkish": "deneyim"
  },
  {
    "English": "score",
    "Turkish": "puan"
  },
  {
    "English": "apple",
    "Turkish": "apple"
  },
  {
    "English": "bought",
    "Turkish": "aldım"
  },
  {
    "English": "led",
    "Turkish": "led"
  },
  {
    "English": "pitch",
    "Turkish": "pitch"
  },
  {
    "English": "coat",
    "Turkish": "ceket"
  },
  {
    "English": "mass",
    "Turkish": "kütle"
  },
  {
    "English": "card",
    "Turkish": "kartı"
  },
  {
    "English": "band",
    "Turkish": "band"
  },
  {
    "English": "rope",
    "Turkish": "ip"
  },
  {
    "English": "slip",
    "Turkish": "kayma"
  },
  {
    "English": "win",
    "Turkish": "kazan"
  },
  {
    "English": "dream",
    "Turkish": "rüya"
  },
  {
    "English": "evening",
    "Turkish": "akşam"
  },
  {
    "English": "condition",
    "Turkish": "durumu"
  },
  {
    "English": "feed",
    "Turkish": "besleme"
  },
  {
    "English": "tool",
    "Turkish": "aracı"
  },
  {
    "English": "total",
    "Turkish": "toplam"
  },
  {
    "English": "basic",
    "Turkish": "temel"
  },
  {
    "English": "smell",
    "Turkish": "koku"
  },
  {
    "English": "valley",
    "Turkish": "valley"
  },
  {
    "English": "nor",
    "Turkish": "ne"
  },
  {
    "English": "double",
    "Turkish": "çift kişilik"
  },
  {
    "English": "seat",
    "Turkish": "koltuk"
  },
  {
    "English": "arrive",
    "Turkish": "gelmesi"
  },
  {
    "English": "master",
    "Turkish": "usta"
  },
  {
    "English": "track",
    "Turkish": "parça"
  },
  {
    "English": "parent",
    "Turkish": "üst"
  },
  {
    "English": "shore",
    "Turkish": "shore"
  },
  {
    "English": "division",
    "Turkish": "bölüm"
  },
  {
    "English": "sheet",
    "Turkish": "sayfa"
  },
  {
    "English": "substance",
    "Turkish": "madde"
  },
  {
    "English": "favor",
    "Turkish": "iyilik"
  },
  {
    "English": "connect",
    "Turkish": "Bağlan"
  },
  {
    "English": "post",
    "Turkish": "post"
  },
  {
    "English": "spend",
    "Turkish": "harcama"
  },
  {
    "English": "chord",
    "Turkish": "akor"
  },
  {
    "English": "fat",
    "Turkish": "yağ"
  },
  {
    "English": "glad",
    "Turkish": "sevindim"
  },
  {
    "English": "original",
    "Turkish": "orijinal"
  },
  {
    "English": "share",
    "Turkish": "paylaşmak"
  },
  {
    "English": "station",
    "Turkish": "istasyonu"
  },
  {
    "English": "dad",
    "Turkish": "baba"
  },
  {
    "English": "bread",
    "Turkish": "ekmek"
  },
  {
    "English": "charge",
    "Turkish": "şarj"
  },
  {
    "English": "proper",
    "Turkish": "uygun"
  },
  {
    "English": "bar",
    "Turkish": "bar"
  },
  {
    "English": "offer",
    "Turkish": "teklif"
  },
  {
    "English": "segment",
    "Turkish": "segment"
  },
  {
    "English": "slave",
    "Turkish": "köle"
  },
  {
    "English": "duck",
    "Turkish": "ördek"
  },
  {
    "English": "instant",
    "Turkish": "anlık"
  },
  {
    "English": "market",
    "Turkish": "pazar"
  },
  {
    "English": "degree",
    "Turkish": "derece"
  },
  {
    "English": "populate",
    "Turkish": "doldurmak"
  },
  {
    "English": "chick",
    "Turkish": "piliç"
  },
  {
    "English": "dear",
    "Turkish": "sevgili"
  },
  {
    "English": "enemy",
    "Turkish": "düşman"
  },
  {
    "English": "reply",
    "Turkish": "cevap"
  },
  {
    "English": "drink",
    "Turkish": "içecek"
  },
  {
    "English": "occur",
    "Turkish": "ortaya"
  },
  {
    "English": "support",
    "Turkish": "destek"
  },
  {
    "English": "speech",
    "Turkish": "konuşma"
  },
  {
    "English": "nature",
    "Turkish": "doğa"
  },
  {
    "English": "range",
    "Turkish": "Aralık"
  },
  {
    "English": "steam",
    "Turkish": "buhar"
  },
  {
    "English": "motion",
    "Turkish": "hareket"
  },
  {
    "English": "path",
    "Turkish": "yol"
  },
  {
    "English": "liquid",
    "Turkish": "sıvı"
  },
  {
    "English": "log",
    "Turkish": "günlük"
  },
  {
    "English": "meant",
    "Turkish": "demek"
  },
  {
    "English": "quotient",
    "Turkish": "bölüm"
  },
  {
    "English": "teeth",
    "Turkish": "diş"
  },
  {
    "English": "shell",
    "Turkish": "shell"
  },
  {
    "English": "neck",
    "Turkish": "boyun"
  }
  ]
}