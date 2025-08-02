const dayNames = {
  en: {
    full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  id: {
    full: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    short: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  },
  fr: {
    full: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    short: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  },
  de: {
    full: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  },
  es: {
    full: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    short: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  },
  it: {
    full: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    short: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
  },
  ja: {
    full: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    short: ['日', '月', '火', '水', '木', '金', '土']
  },
  zh: {
    full: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    short: ['日', '一', '二', '三', '四', '五', '六']
  },
  ru: {
    full: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  },
  pt: {
    full: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    short: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  },
  hi: {
    full: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    short: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
  },
  ko: {
    full: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    short: ['일', '월', '화', '수', '목', '금', '토']
  },
  tr: {
    full: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    short: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts']
  },
  nl: {
    full: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    short: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']
  },
  th: {
    full: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    short: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  },
  vi: {
    full: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
    short: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
  },
  pl: {
    full: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    short: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb']
  },
  ar: {
    full: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    short: ['أحد', 'اثن', 'ثلث', 'أرب', 'خمي', 'جمع', 'سبت']
  },
  el: {
    full: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
    short: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ']
  },
  sv: {
    full: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    short: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
  }
};

export default dayNames;
