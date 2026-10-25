/* =========================================================
   الإعدادات — عدّلي هنا فقط
   ========================================================= */
const CONFIG = {
  ownerName: 'خيرية علي',          // ← الاسم اللي يطلع جنب العنوان
  magazineTitle: 'مجلة التوجيه الطلابي',
  previewEnabled: true,            // true = شاشة "ابدأ المعاينة" + مؤقت ٣٠ دقيقة | false = المجلة تفتح مباشرة
  previewMinutes: 30,
  storageKey: 'magazine-preview-v2'
};

/* =========================================================
   المحتوى
   ========================================================= */

const topics = [
['leaf','قيمنا الإسلامية','أعبد الله وأحسن إلى خلقه','القيمة تظهر في اختياراتنا الصغيرة: في صدق الحديث، وإتقان العمل، وحسن التعامل.',['أحافظ على عبادتي وأحترم وقتها.','أصدق في حديثي، ولو أخطأت.','أؤدي الأمانة وأحفظ ممتلكات الآخرين.'],'وجدت مبلغًا في ممر المدرسة؛ ماذا تفعل؟','أسلمه إلى إدارة المدرسة أو الشخص المسؤول عن المفقودات، ولا آخذه لنفسي.','اكتب عملًا تتقرب به إلى الله بإحسانك إلى الآخرين.'],
['shield','رفق.. بيئة تربوية آمنة','معًا نوقف التنمر','التنمر إيذاء متعمد يتكرر ويصاحبه اختلال في القوة. وكل أذى يستحق المعالجة حتى لو حدث مرة واحدة.',['أرفض المشاركة في السخرية أو نشرها.','أساند المتضرر وأطلب مساعدة شخص بالغ موثوق.','أحتفظ بدليل الإساءة الرقمية دون إعادة نشره.'],'شاهدت مجموعة تسخر من زميل؛ ما التصرف المناسب؟','أسانده بهدوء وأخبر معلمًا أو موجهًا طلابيًا. ولا أواجه المجموعة إذا كان ذلك يعرضني للخطر.','صغ عبارة دعم لمن تعرض للإيذاء.'],
['shirt','الالتزام بالزي المدرسي','مظهر مرتب.. واستعداد للتعلم','الالتزام بالزي المعتمد يدعم الانتماء للمدرسة ويهيئنا ليوم منظم، مع احترام ظروف الجميع.',['أجهز ملابسي من المساء.','أهتم بالنظافة والترتيب.','أطلب المساعدة بسرية عند وجود عائق.'],'لم يتمكن أحد زملائك من توفير الزي؛ كيف تدعمه؟','أحفظ خصوصيته، وأرشده إلى شخص مسؤول في المدرسة يمكنه تقديم المساعدة دون إحراج.','ضع خطة من خطوتين للاستعداد صباحًا.'],
['chat','المهارات النفسية والاجتماعية','أفهم نفسي.. وأتواصل باحترام','المشاعر رسائل تساعدنا على فهم أنفسنا. يمكننا التعبير عنها بأمان، واختيار سلوك يحفظ حقوقنا وحقوق الآخرين.',['أسمي شعوري: غضب، حزن، قلق أو فرح.','أتوقف قليلًا وأتنفس بهدوء قبل الرد.','أستخدم: أشعر بـ… وأحتاج إلى…'],'غضبت لأن أحدًا قاطع حديثك؛ ماذا تقول؟','أشعر بالانزعاج عندما يُقاطع حديثي، وأحتاج إلى أن أكمل فكرتي ثم أستمع إليك.','أكمل: عندما أنزعج، يساعدني أن…'],
['book','الدافعية للتعلم','خطوة صغيرة.. تصنع تقدمًا','التعلم يتحسن بالمحاولة وطلب التغذية الراجعة. لا أقارن بدايتي بنتائج الآخرين؛ أقارن تقدمي بما كنت عليه.',['أحدد هدفًا صغيرًا يمكن ملاحظته.','أقسم المهمة وأبدأ بالجزء الأول.','أراجع خطئي وأسأل عما لم أفهمه.'],'قلت: لا أستطيع حل هذا السؤال؛ كيف تعيد العبارة؟','لم أتمكن من حله بعد. سأراجع المثال وأطلب توضيح الخطوة التي توقفت عندها.','اكتب هدفًا دراسيًا تنجزه هذا الأسبوع.'],
['target','التوجيه المهني','أكتشف ميولي.. وأوسع آفاقي','معرفة المهن تبدأ باكتشاف ما نستمتع به وما نريد تعلمه. لا تحصر قدراتك في مهنة واحدة، وجرب مهارات متنوعة.',['ألاحظ الأنشطة التي تستثير فضولي.','أتعرف على المهن ومهاراتها من مصادر موثوقة.','أجرب مشروعًا صغيرًا يناسب عمري.'],'تحب الرسم والعلوم معًا؛ هل يجب أن تتخلى عن أحدهما؟','لا؛ يمكن الجمع بين الاهتمامات في مجالات مثل التصميم العلمي، ويمكنك استكشاف مجالات أخرى دون قرار مبكر.','اختر مهنة واكتب مهارتين تحتاج إليهما.'],
['pencil','الاختبارات.. أستعد بثقة','خطة هادئة.. وجهد منتظم','الاستعداد الجيد موزع على أيام، ويشمل المراجعة والتدرب والراحة. الدرجة تصف أداءً في مهمة، ولا تختصر قيمة الإنسان.',['أوزع المراجعة على فترات مناسبة.','أحل أسئلة وأراجع سبب الخطأ.','أنام جيدًا وأجهز أدواتي مبكرًا.'],'نسيت إجابة في الاختبار؛ كيف تتصرف؟','أتنفس بهدوء وأنتقل إلى سؤال آخر ثم أعود إليها، وأستفيد من الوقت المتاح دون الانشغال باللوم.','اكتب أول مادة ستراجعها وأول مهمة فيها.'],
['rocket','تنمية الدافعية','أستمر حتى عندما تقل الحماسة','الحماسة تتغير، لكن العادات الصغيرة تساعدنا على الاستمرار. ابحث عن معنى لما تتعلمه، واحتفل بجهدك وتحسنك.',['أبدأ بخمس دقائق من المهمة.','أبعد ما يشتت انتباهي خلال العمل.','أكافئ نفسي باستراحة أو نشاط محبب.'],'أجلت مهمة عدة مرات؛ ما البداية المناسبة؟','أحدد أصغر جزء منها، مثل قراءة فقرة أو حل سؤال واحد، وأبدأ الآن ثم أحدد الخطوة التالية.','صمم مكافأة بسيطة لا تعتمد على الشراء.'],
['clock','الانضباط المدرسي','انضباطي.. اختيار ومسؤولية','الانضباط عادة تحمي وقت التعلم وحقوق الجميع، ويقوم على الفهم والمساندة وتحمل المسؤولية.',['أحضر في الوقت المحدد وأجهز أدواتي.','أتبع التعليمات وأستأذن عند الحاجة.','أعالج أسباب التأخر مع الأسرة والمدرسة.'],'تكرر تأخرك صباحًا؛ ماذا تغير؟','أراجع السبب، وأجهز حقيبتي من الليل، وأنظم وقت النوم والاستيقاظ بالتعاون مع الأسرة.','حدد عادة واحدة ستتابعها خمسة أيام.'],
['compass','الوعي الفكري','أتثبت.. وأفكر.. وأحاور','التفكير الواعي يجمع بين احترام الثوابت، وفحص المعلومات، والحوار بأدب. لا أجعل كثرة التداول دليلًا على الصحة.',['أتحقق من المصدر والتاريخ والسياق.','أفرق بين الخبر والرأي والإعلان.','أناقش الفكرة باحترام وأسأل أهل الاختصاص.'],'وصلتك رسالة مثيرة بلا مصدر؛ هل تنشرها؟','أتوقف عن نشرها، وأتحقق من مصدر رسمي أو موثوق. وإذا لم أجد دليلًا كافيًا فلا أنقلها.','اكتب ثلاثة أسئلة تفحص بها أي خبر.'],
['lock','المواطنة الرقمية','أحمي خصوصيتي.. وأحترم الآخرين','التعامل الرقمي مسؤولية: أحفظ بياناتي، وأحترم حقوق الآخرين، وأستخدم التقنية فيما ينفع.',['لا أشارك كلمات المرور أو رموز التحقق.','أستأذن قبل نشر صور الآخرين أو أعمالهم.','أبلغ عن الإساءة وأستعين بشخص بالغ موثوق.'],'طلب حساب مجهول رمز التحقق بحجة منحك جائزة؛ ماذا تفعل؟','لا أرسل الرمز، وأحظر الحساب وأبلغ عنه. وأطلب مساعدة شخص موثوق إذا شاركت بيانات بالفعل.','اكتب قاعدة رقمية تلتزم بها من اليوم.']
];

const values = [
['flag','الانتماء للوطن','أخدم وطني بإتقاني، وأحافظ على مرافقه، وأتحقق قبل نقل أخباره.'],
['smile','التسامح','أقبل الاعتذار وأختلف بأدب، مع حفظ حقي وطلب المساعدة عند الأذى.'],
['scale','الوسطية والاعتدال','أوازن بين الحقوق والواجبات، وأتجنب الإفراط والتفريط.'],
['leaf','المرونة','أغير طريقتي إذا لم تنجح، وأطلب الدعم عند التحديات.'],
['flame','العزيمة','أحدد هدفي وأبدأ بما أستطيع اليوم.'],
['mountain','المثابرة','أكرر المحاولة بطرق أفضل، وأتعلم من ملاحظات الآخرين.'],
['sparkle','الإتقان','أراجع عملي قبل تسليمه وأحسن ما أستطيع.'],
['sun','الإيجابية','أرى فرصة للتحسن وأساند الآخرين بكلمة وعمل.'],
['key','الأمانة','أحفظ الحقوق والأسرار وأعيد ما استعرت.']
];

const quiz = [
['شاهدت إساءة رقمية لأحد زملائك. ما الأنسب؟',['أعيد نشرها للتحذير','أسانده وأبلغ شخصًا موثوقًا','أشارك في التعليقات'],1],
['للتأكد من خبر قبل نشره، أبحث عن:',['المصدر والتاريخ والسياق','عدد مرات الإرسال فقط','عنوان مثير'],0],
['عندما أجد مهمة صعبة، فإنني:',['أتوقف نهائيًا','أقارن نفسي بالآخرين','أقسمها وأطلب توضيحًا'],2],
['من صور الأمانة:',['نسبة عمل الآخرين إليّ','إعادة الأدوات المستعارة','نشر أسرار الأصدقاء'],1],
['المجلس الطلابي يساعد على:',['التعبير المنظم والمشاركة','نشر أسماء أصحاب المشكلات','اتخاذ قرارات دون إشراف'],0]
];

/* =========================================================
   الأيقونات (خطية موحّدة بدل الإيموجي)
   ========================================================= */
const ICONS = {
  book:'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  leaf:'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  shield:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  shirt:'M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z',
  chat:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  target:'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12M12 10a2 2 0 1 0 0 4a2 2 0 1 0 0-4',
  pencil:'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z',
  rocket:'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
  clock:'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20M12 6v6l4 2',
  compass:'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z',
  lock:'M5 11h14v10H5zM7 11V7a5 5 0 0 1 10 0v4',
  flag:'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7',
  smile:'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01',
  scale:'M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2',
  flame:'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  mountain:'M8 3l4 8 5-5 5 15H2L8 3z',
  sparkle:'M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z',
  sun:'M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41',
  key:'M21 2l-2 2M11.39 11.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zM11.39 11.61L15.5 7.5M15.5 7.5l3 3L22 7l-3-3M15.5 7.5L19 4',
  heart:'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
  users:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  landmark:'M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z',
  trophy:'M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8M18 2H6v7a6 6 0 0 0 12 0z',
  check:'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  megaphone:'M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6',
  chart:'M3 3v18h18M18 17V9M13 17V5M8 17v-3',
  bulb:'M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14',
  volume:'M11 5L6 9H2v6h4l5 4zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14',
  stop:'M6 6h12v12H6z',
  sliders:'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
  arrowL:'M19 12H5M12 19l-7-7 7-7',
  arrowR:'M5 12h14M12 5l7 7-7 7'
};
const ic = (name, size = 22, sw = 1.9) =>
  `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[name] || ''}"/></svg>`;
const iconBox = name => `<span class="icon">${ic(name, 26)}</span>`;
const toAr = n => Number(n).toLocaleString('ar-SA');

/* =========================================================
   بناء الصفحات (٢٦ صفحة)
   ========================================================= */
const owner = CONFIG.ownerName.trim();
const ownerBadge = owner ? `<span class="owner-name">${ic('pencil',15,2)} إعداد: ${owner}</span>` : '';
const toplineTitle = owner ? `${CONFIG.magazineTitle} • ${owner}` : CONFIG.magazineTitle;

const pages = [];
const wrap = (k, t, b) => `<div class="topline"><span>${k}</span><span>${toplineTitle}</span></div><div class="content"><div class="eyebrow">نَكْبُرُ بِالْقِيَمِ</div><h2>${t}</h2>${b}</div>`;
const reflect = `<p class="mobile-help">نشاط للتأمل والمناقشة — لا يُحفظ شيء مما تكتبه.</p>`;
const scenario = (q, a, label = 'أظهر التصرف المقترح') => `<div class="note"><span class="note-label">${ic('bulb',18,2)} موقف للتفكير</span><p><b>${q}</b></p><button class="cta secondary" onclick="reveal(this)" aria-expanded="false" data-label="${label}">${label}</button><div class="answer hidden" role="status">${ic('check',22,2)}<span>${a}</span></div></div>`;

// 1 الغلاف
pages.push({title:'الغلاف', html:`<div class="topline"><span>تعلّم • قيم • حياة</span><span>مجلة تفاعلية عامة</span></div><div class="content"><div class="hero"><div class="cover-text"><span class="pill"><span class="dot"></span> معًا نحو بيئة مدرسية آمنة ومحفّزة</span><h1 class="magazine-title">مجلة التوجيه<br><span class="gold">الطلابي</span></h1>${ownerBadge}<p class="intro">نكتشف قدراتنا، ونبني عاداتنا، ونترك أثرًا طيبًا كل يوم.</p><div class="cta-row"><button class="cta" onclick="go(2)">ابدأ رحلتك ${ic('arrowL',20,2.2)}</button><button class="cta outline" onclick="go(1)">تصفّح الفهرس</button></div></div><figure class="cover-figure"><img class="photo-hero" src="photos/saudi-classroom.jpg" alt="مشهد مولّد لطالبات ابتدائي بالزي الوردي والأبيض مع معلمتهن في فصل سعودي" width="1400" height="933" onerror="this.style.visibility='hidden'"><div class="float-badge"><span class="badge-ic">${ic('leaf',20,2)}</span><span><b>نَكْبُرُ بِالْقِيَمِ</b><small>٩ قيم نعيشها كل يوم</small></span></div><figcaption class="photo-caption">صورة تمثيلية مولّدة تحاكي البيئة السعودية • لا تمثل أشخاصًا حقيقيين</figcaption></figure></div><div class="ribbon"><div><span class="num">٢٦</span><b>صفحة تفاعلية</b><span>تصفّح، اقرأ، وشارك بفكرتك</span></div><div><span class="num">١١</span><b>برنامجًا إرشاديًا</b><span>مواقف من الحياة المدرسية</span></div><div><span class="num">٩</span><b>قيم.. وتحديات عملية</b><span>من المعرفة إلى السلوك</span></div></div><p class="mobile-help">استخدم أزرار التقليب أسفل المجلة أو أسهم لوحة المفاتيح، ويمكنك العودة للفهرس في أي وقت.</p></div>`});

// صورة جانبية للصفحات ذات القسمين
const sideArt = `<figure style="margin:0"><img class="photo-hero" src="photos/saudi-classroom.jpg" alt="مشهد مولّد لطالبات مع معلمتهن في فصل سعودي" width="1400" height="933" loading="lazy" onerror="this.style.visibility='hidden'"><figcaption class="photo-caption">صورة تمثيلية مولّدة تحاكي البيئة السعودية • لا تمثل أشخاصًا حقيقيين</figcaption></figure>`;

// 2 الفهرس
pages.push({title:'الفهرس', html:wrap('دليل الرحلة','ماذا في مجلتنا؟',`<p class="intro">اختر بابًا يهمّك، أو تصفّح المجلة صفحة بعد أخرى.</p><div class="grid">${[['sun','رسالة المجلة','لنبدأ معًا',2],['book','البرامج الإرشادية','١١ برنامجًا وموقفًا',4],['leaf','حديقة القيم','٩ قيم نعيشها',15],['landmark','المجلس الطلابي','صوت ومسؤولية',19],['trophy','المسابقة','اختبر فهمك',22],['check','تحدي الأسبوع','خطوتك الأولى',24]].map(x=>`<button class="card toc" onclick="go(${x[3]})">${iconBox(x[0])}<span class="toc-text"><b>${x[1]}</b><span>${x[2]}</span></span><span class="toc-page" aria-label="صفحة ${toAr(x[3]+1)}">${toAr(x[3]+1)}</span></button>`).join('')}</div><div class="note"><span class="note-label">${ic('shield',18,2)} خصوصيتك محفوظة</span><p>المجلة تتيح القراءة والأنشطة التفاعلية دون إدخال بيانات شخصية.</p></div>`)});

// 3 رسالة المجلة
pages.push({title:'رسالة المجلة', html:wrap('أهلًا بك','لكل طالب وطالبة.. مساحة للنمو',`<div class="hero"><div><p class="intro">المدرسة مكان نتعلم فيه المعرفة، ونتدرب فيه على الحياة.</p><p>في هذه المجلة ستجد أفكارًا تساعدك على فهم نفسك، وتنظيم وقتك، وبناء علاقات آمنة، وخدمة مجتمعك.</p><p>لا نحتاج إلى أن نكون كاملين؛ نحتاج إلى أن نحاول، ونفهم أخطاءنا، ونطلب المساعدة حين نحتاجها.</p></div>${sideArt}</div><div class="note"><b>رسالتنا:</b> دعم نمو متوازن، وتعزيز قيم راسخة، وتحويل المعرفة إلى ممارسة يومية.</div>`)});

// 4 خدمات التوجيه
pages.push({title:'خدمات التوجيه الطلابي', html:wrap('دليل المساندة','طلب المساعدة.. خطوة قوة',`<p class="intro">التوجيه الطلابي يساندك في التعلم، والتكيف، والعلاقات، واتخاذ القرارات المناسبة لعمرك.</p><div class="grid"><div class="card">${iconBox('book')}<b>تعلم أفضل</b><span>تنظيم الدراسة وفهم العوائق.</span></div><div class="card">${iconBox('heart')}<b>توازن ودعم</b><span>التعبير عن المشاعر ومواجهة الصعوبات.</span></div><div class="card">${iconBox('users')}<b>علاقات آمنة</b><span>التعاون وحل الخلاف وطلب الحماية.</span></div></div><div class="twocol"><section><h3>كيف أطلب المساعدة؟</h3><ul class="steps"><li>اختر شخصًا موثوقًا من الأسرة أو المدرسة.</li><li>صف ما حدث وما تحتاج إليه بوضوح.</li><li>اتفق على خطوة للمتابعة، وأخبره إذا استمرت المشكلة.</li></ul></section><section class="poster">${iconBox('shield')}<p>طلب المساعدة<br>خطوة قوة.</p><h3>دليل المساندة</h3></section></div><div class="note">تحفظ المدرسة الخصوصية وفق أنظمتها، وقد يلزم إشراك المختصين أو الأسرة لحمايتك عند وجود خطر.</div>`)});

// 5–15 البرامج الإرشادية (١١)
topics.forEach((t,i) => pages.push({title:t[1], html:wrap('البرامج الإرشادية • '+toAr(i+1)+' من ١١', t[1], `<span class="pill gold-pill">${ic(t[0],16,2.2)} ${t[2]}</span><p class="intro">${t[3]}</p><div class="twocol"><section><h3>كيف أطبّق؟</h3><ul class="steps">${t[4].map(s=>`<li>${s}</li>`).join('')}</ul></section><section class="poster">${iconBox(t[0])}<p>المعرفة بداية..<br>والممارسة تصنع الفرق.</p><h3>${t[2]}</h3></section></div>${scenario(t[5], t[6])}<div class="activity"><h3>${ic('pencil',20,2)} دوري الآن</h3><label>${t[7]}</label>${reflect}</div>`)}));

// 16 حديقة القيم
pages.push({title:'حديقة القيم', html:wrap('القيم في حياتنا','تسع قيم.. نعيشها كل يوم',`<p class="intro">اختر قيمة، وفكّر في سلوك صغير يجعلها مرئية في حياتك.</p><div class="grid">${values.map((v,i)=>`<button class="card" onclick="go(${16+Math.floor(i/3)})">${iconBox(v[0])}<b>${v[1]}</b><span>اكتشف الممارسة ←</span></button>`).join('')}</div>`)});

// 17–19 قيم وممارسات
for (let g=0; g<3; g++) pages.push({title:'قيم وممارسات '+(g+1), html:wrap('حديقة القيم • '+toAr(g+1)+' من ٣','القيمة.. حين تتحول إلى عمل', `<div class="grid">${values.slice(g*3,g*3+3).map(v=>`<div class="card">${iconBox(v[0])}<b>${v[1]}</b><p style="font-size:17px;margin:4px 0 12px">${v[2]}</p><label class="check"><input type="checkbox"> أختار هذه القيمة لأطبقها اليوم</label></div>`).join('')}</div><div class="activity"><h3>${ic('sun',20,2)} أثر طيب</h3><p>في نهاية اليوم اسأل نفسك: ما السلوك الذي مارسته؟ وما الذي سأحسّنه غدًا؟</p></div>`)});

// 20 المجلس الطلابي
pages.push({title:'المجلس الطلابي', html:wrap('مشاركة ومسؤولية','المجلس الطلابي.. صوت يصنع فرقًا',`<div class="hero"><div><p class="intro">مساحة منظمة يشارك فيها الطلاب والطالبات بأفكارهم، ويتعلمون الحوار والقيادة والعمل الجماعي.</p><p>تُنفذ المشاركة وفق تنظيمات المدرسة، وبإشراف المسؤولين فيها، وبما يناسب المرحلة الدراسية.</p><button class="cta" onclick="go(20)">تعرّف على الأدوار ${ic('arrowL',20,2.2)}</button></div>${sideArt}</div><div class="note"><b>الهدف:</b> تحسين البيئة المدرسية، والتعبير عن الاحتياجات باحترام، والمشاركة في مبادرات نافعة.</div>`)});

// 21 أدوار المجلس
pages.push({title:'أدوار المجلس', html:wrap('المجلس الطلابي','تكامل الأدوار.. نجاح الفريق',`<div class="grid">${[['compass','تنسيق اللقاء','تنظيم الحوار وإتاحة المشاركة.'],['pencil','توثيق المقترحات','تسجيل الأفكار والقرارات بوضوح.'],['users','تمثيل الصفوف','نقل الاحتياجات دون كشف خصوصيات.'],['leaf','فريق المبادرات','تحويل الأفكار إلى خطوات ممكنة.'],['megaphone','التواصل','عرض الرسائل بعد اعتماد المدرسة.'],['chart','المتابعة','رصد التنفيذ ومراجعة الأثر.']].map(v=>`<div class="card">${iconBox(v[0])}<b>${v[1]}</b><span>${v[2]}</span></div>`).join('')}</div><div class="note">هذه أدوار توضيحية قابلة للتكييف، وليست أسماء أعضاء أو تشكيلًا رسميًا لمجلس محدد.</div>`)});

// 22 ورشة مقترح طلابي
pages.push({title:'ورشة مقترح طلابي', html:wrap('مختبر الأفكار','من ملاحظة.. إلى مبادرة',`<div class="twocol"><section><h3>خطوات المبادرة</h3><ul class="steps"><li>نلاحظ حاجة واضحة في المدرسة دون لوم أشخاص.</li><li>نقترح حلًا بسيطًا وآمنًا وقابلًا للتنفيذ.</li><li>نعرضه على المسؤولين ونحدد ما يلزم بعد الموافقة.</li><li>نراجع النتيجة ونتعلم مما نجح وما يحتاج تحسينًا.</li></ul></section><section class="poster">${iconBox('bulb')}<p>كل مبادرة<br>تبدأ بملاحظة.</p><h3>مختبر الأفكار</h3></section></div><div class="activity"><h3>${ic('pencil',20,2)} بطاقة فكرة</h3>${['ما الحاجة التي لاحظتها؟','ما الحل الذي تقترحه؟','كيف نعرف أن الحل أفاد؟'].map(t=>`<label>${t}</label>`).join('')}${reflect}</div>`)});

// 23 المسابقة
pages.push({title:'مسابقة المجلة', html:wrap('اختبر فهمك','تحدي المعرفة',`<p class="intro">خمسة أسئلة من رحلتك في المجلة. اختر الإجابة ثم راجع تفسيرها في الصفحات السابقة.</p><div id="quiz"></div><div id="result" class="note" role="status">أجب عن الأسئلة لعرض النتيجة.</div>`)});

// 24 مواقف وقيم
pages.push({title:'مواقف وقيم', html:wrap('تأمل وناقش','ما القيمة التي تختارها؟',`<p class="intro">اقرأ الموقف، وفكّر في قيمة وسلوك مناسبين قبل إظهار الاقتراح.</p>${[['تعثر زميل في تقديم مشروعه أمام الصف.','الإيجابية والرفق: أشجعه، وأمتنع عن السخرية، وأعرض المساعدة.'],['لم تنجح طريقتك في المذاكرة.','المرونة والمثابرة: أجرب طريقة أخرى وأراجع ما احتاج إلى فهمه.'],['رأيت عبثًا بمرفق عام.','الانتماء والأمانة: أحافظ على المرفق وأبلغ المسؤول دون تعريض نفسي للخطر.']].map(t=>scenario(t[0], t[1], 'أظهر الاقتراح')).join('')}`)});

// 25 تحدي الأسبوع
pages.push({title:'تحدي الأسبوع', html:wrap('من القراءة إلى العمل','خمسة أيام.. وخمس خطوات',`<p class="intro">تابع خطواتك لنفسك. ليست منافسة على الكمال، بل فرصة لبناء عادة نافعة.</p><div style="display:flex;flex-direction:column;gap:10px;margin-top:18px">${['أجهز حقيبتي وأحضر في الوقت المحدد.','أساند زميلًا بكلمة طيبة.','أنجز مهمة صغيرة بإتقان.','أتحقق من معلومة قبل نقلها.','أراجع تقدمي وأشكر من ساندني.'].map((t,i)=>`<label class="check" style="margin:0"><input type="checkbox" onchange="updateChallenge()"> <span><b>اليوم ${toAr(i+1)}:</b> ${t}</span></label>`).join('')}</div><div class="note" id="challengeResult" role="status">ابدأ بخطوة.. كل تقدم يستحق التقدير.</div><div class="activity"><h3>${ic('pencil',20,2)} تأمل ختامي</h3><label>ما العادة التي أريد الاستمرار عليها؟</label>${reflect}</div>`)});

// 26 الختام
pages.push({title:'ختام الرحلة', html:wrap('وإلى لقاء','أثرك يبدأ بخطوة',`<div class="hero"><div><p class="intro">تعلمت فكرة؟<br>اختر منها سلوكًا.<br>مارسته اليوم؟<br>حافظ عليه غدًا.</p><p>القيم لا تبقى بين الصفحات؛ نأخذها معنا إلى الصف، والمنزل، والعالم الرقمي.</p><button class="cta" onclick="go(1)">عد إلى الفهرس</button></div>${sideArt}</div><div class="end"><h3>رسالة إلى الأسرة والمدرسة</h3><p>القدوة والحوار والتشجيع والمتابعة المتزنة تساعد أبناءنا وبناتنا على النمو. احتفوا بالجهد، وافهموا العوائق، واجعلوا طلب المساعدة متاحًا.</p></div><p class="mobile-help">الصور مولّدة بالذكاء الاصطناعي لتحاكي البيئة المدرسية السعودية. جميع الشخصيات والمدارس تمثيلية وغير منسوبة لأشخاص أو جهات حقيقية.</p><p class="mobile-help">الاستماع يستخدم الصوت العربي المتاح على جهازك؛ قد يختلف توفره من جهاز إلى آخر.</p>`)});

// صور الشريط في بعض الصفحات
const photoPage = {4:'saudi-library',6:'saudi-classroom',8:'saudi-library',10:'saudi-courtyard',11:'saudi-library',12:'saudi-courtyard',19:'saudi-courtyard'};
Object.entries(photoPage).forEach(([i,name]) => {
  if (!pages[Number(i)].html.includes('<p class="intro">')) return;
  pages[Number(i)].html = pages[Number(i)].html.replace('<p class="intro">',
    `<img class="photo-strip" src="photos/${name}.jpg" alt="مشهد تمثيلي مولّد يحاكي البيئة المدرسية السعودية" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='none'"><p class="photo-caption">صورة تمثيلية مولّدة • بيئة مدرسية سعودية</p><p class="intro">`);
});

/* =========================================================
   التنقل والتفاعل
   ========================================================= */
let current = 0, answers = {};
const $ = id => document.getElementById(id);

// الأقسام في الشريط العلوي: [رقم بداية القسم، رقم نهايته]
const sections = [[1,1],[4,14],[15,18],[22,22]];

function setSpeak(playing){
  $('speak').innerHTML = playing ? `${ic('stop',18,2)} إيقاف` : `${ic('volume',18,2)} استمع للصفحة`;
}

function go(n){
  if (n < 0 || n >= pages.length) return;
  stopReading();
  current = n;
  $('page').innerHTML = pages[n].html;
  $('counter').textContent = `صفحة ${toAr(n+1)} من ${toAr(pages.length)} • ${pages[n].title}`;
  $('prev').disabled = n === 0;
  $('next').disabled = n === pages.length-1;
  $('bar').style.width = ((n+1)/pages.length*100) + '%';
  $('audioStatus').textContent = '';
  document.querySelectorAll('.nav-link').forEach((b,i) => {
    const [a,z] = sections[i];
    if (n >= a && n <= z) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
  if (n === 22) renderQuiz();
  window.scrollTo({top:0, behavior:'smooth'});
  history.replaceState(null, '', '#page-'+(n+1));
}

function reveal(b){
  const el = b.nextElementSibling;
  el.classList.toggle('hidden');
  const open = !el.classList.contains('hidden');
  b.textContent = open ? 'إخفاء الاقتراح' : (b.dataset.label || 'أظهر الاقتراح');
  b.setAttribute('aria-expanded', open);
}

function renderQuiz(){
  $('quiz').innerHTML = quiz.map((q,i)=>`<section class="activity"><h3>${toAr(i+1)}. ${q[0]}</h3><div class="q-options">${q[1].map((a,j)=>`<button onclick="answer(${i},${j})" class="${answers[i]===j?(j===q[2]?'correct':'wrong'):''}">${a}${answers[i]===j?(j===q[2]?' ✓':' — حاول مرة أخرى'):''}</button>`).join('')}</div></section>`).join('');
  const count = Object.keys(answers).length;
  const score = quiz.filter((q,i)=>answers[i]===q[2]).length;
  $('result').textContent = count === 5
    ? `نتيجتك الحالية: ${toAr(score)} من ٥. ${score===5 ? 'أحسنت! انقل معرفتك إلى سلوك.' : 'يمكنك تعديل إجابتك والتعلم بالمحاولة.'}`
    : `أجبت عن ${toAr(count)} من ٥ أسئلة.`;
}
function answer(i,j){ answers[i] = j; renderQuiz(); }

function updateChallenge(){
  const n = document.querySelectorAll('.check input:checked').length;
  $('challengeResult').textContent = `أكملت ${toAr(n)} من ٥ خطوات. ` + (n===5 ? 'أحسنت! اختر عادة تستمر عليها.' : 'واصل بخطوة تناسبك.');
}

/* =========================================================
   القراءة الصوتية — اختيار أفضل صوت عربي + السرعة
   ========================================================= */
const VOICE_KEY = 'magazine-voice-v1';
const voiceState = { voices: [], voiceURI: null, rate: 0.9, queue: [], playing: false };

const vPrefs = {
  get(){ try { return JSON.parse(localStorage.getItem(VOICE_KEY)) || {}; } catch { return {}; } },
  set(v){ try { localStorage.setItem(VOICE_KEY, JSON.stringify(v)); } catch {} }
};

// ترتيب الأفضلية: الأصوات الطبيعية/الأونلاين ثم أصوات الشركات المعروفة ثم السعودي
function voiceScore(v){
  const n = (v.name + ' ' + v.voiceURI).toLowerCase();
  let s = 0;
  if (/natural|neural|online|premium|enhanced/.test(n)) s += 50;
  if (/google/.test(n)) s += 30;
  if (/microsoft/.test(n)) s += 25;
  if (/hamed|zariyah|maged|laila|tarik|majed|shakir|salma|fatima/.test(n)) s += 10;
  if (/ar-sa/i.test(v.lang)) s += 8;
  if (!v.localService) s += 5;
  return s;
}

function arabicLabel(v){
  const region = { 'SA':'السعودية','EG':'مصر','AE':'الإمارات','KW':'الكويت','QA':'قطر','BH':'البحرين','OM':'عُمان','JO':'الأردن','LB':'لبنان','SY':'سوريا','IQ':'العراق','YE':'اليمن','MA':'المغرب','DZ':'الجزائر','TN':'تونس','LY':'ليبيا','001':'فصحى' };
  const code = (v.lang.split(/[-_]/)[1] || '').toUpperCase();
  const name = v.name.replace(/Microsoft|Google|Online|\(Natural\)|- Arabic.*|Arabic/gi,'').replace(/\s+/g,' ').trim() || 'صوت عربي';
  return `${name}${region[code] ? ' • ' + region[code] : ''}`;
}

function loadVoices(){
  if (!('speechSynthesis' in window)) return;
  const all = speechSynthesis.getVoices();
  voiceState.voices = all.filter(v => /^ar/i.test(v.lang)).sort((a,b) => voiceScore(b) - voiceScore(a));
  const saved = vPrefs.get();
  if (saved.rate) voiceState.rate = saved.rate;
  const keep = voiceState.voices.find(v => v.voiceURI === (voiceState.voiceURI || saved.voiceURI));
  voiceState.voiceURI = keep ? keep.voiceURI : (voiceState.voices[0]?.voiceURI || null);
  renderVoicePanel();
}

function currentVoice(){ return voiceState.voices.find(v => v.voiceURI === voiceState.voiceURI) || null; }

function renderVoicePanel(){
  const sel = $('voice-select'); if (!sel) return;
  if (!voiceState.voices.length){
    sel.innerHTML = '<option>لا يوجد صوت عربي في هذا الجهاز</option>';
    sel.disabled = true;
    $('voice-note').textContent = 'جرّبي متصفح Chrome أو Edge، أو أضيفي اللغة العربية من إعدادات الجهاز.';
  } else {
    sel.disabled = false;
    sel.innerHTML = voiceState.voices.map((v,i) =>
      `<option value="${v.voiceURI}" ${v.voiceURI===voiceState.voiceURI?'selected':''}>${arabicLabel(v)}${i===0?' (الأفضل)':''}</option>`).join('');
    $('voice-note').textContent = 'الأصوات المتاحة تختلف حسب جهازك ومتصفحك.';
  }
  $('voice-rate').value = voiceState.rate;
  $('rate-val').textContent = toAr(voiceState.rate) + '×';
}

function saveVoicePrefs(){ vPrefs.set({ voiceURI: voiceState.voiceURI, rate: voiceState.rate }); }

// تقسيم النص لجمل قصيرة (Chrome يوقف القراءة الطويلة فجأة)
function chunkText(text){
  const parts = text.replace(/\s+/g,' ').split(/(?<=[.!؟?؛:،\n])\s+/);
  const out = []; let buf = '';
  for (const p of parts){
    if ((buf + ' ' + p).length > 180 && buf){ out.push(buf.trim()); buf = p; }
    else buf += ' ' + p;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

function stopReading(){
  voiceState.queue = []; voiceState.playing = false;
  window.speechSynthesis?.cancel();
  setSpeak(false);
}

function speakQueue(){
  if (!voiceState.playing) return;
  const next = voiceState.queue.shift();
  if (!next){ stopReading(); return; }
  const u = new SpeechSynthesisUtterance(next);
  const v = currentVoice();
  if (v){ u.voice = v; u.lang = v.lang; } else u.lang = 'ar-SA';
  u.rate = voiceState.rate;
  u.onend = speakQueue;
  u.onerror = e => { if (e.error !== 'interrupted' && e.error !== 'canceled') stopReading(); };
  speechSynthesis.speak(u);
}

function readPage(){
  if (!('speechSynthesis' in window)) { $('audioStatus').textContent = 'الاستماع غير مدعوم في هذا المتصفح.'; return; }
  if (voiceState.playing) { stopReading(); return; }
  if (!voiceState.voices.length) loadVoices();
  if (!voiceState.voices.length) { $('audioStatus').textContent = 'لا يتوفر صوت عربي على هذا الجهاز حاليًا. افتحي إعدادات الصوت للتفاصيل.'; return; }
  $('audioStatus').textContent = '';
  speechSynthesis.cancel();
  voiceState.queue = chunkText($('page').innerText);
  voiceState.playing = true;
  setSpeak(true);
  speakQueue();
}

function setupVoicePanel(){
  const btn = $('voice-btn'), panel = $('voice-panel');
  const toggle = open => { panel.classList.toggle('hidden', !open); btn.setAttribute('aria-expanded', open); };
  btn.onclick = e => { e.stopPropagation(); loadVoices(); toggle(panel.classList.contains('hidden')); };
  $('voice-close').onclick = () => toggle(false);
  document.addEventListener('click', e => { if (!panel.contains(e.target) && e.target !== btn) toggle(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  $('voice-select').onchange = e => { voiceState.voiceURI = e.target.value; saveVoicePrefs(); if (voiceState.playing) { stopReading(); readPage(); } };
  $('voice-rate').oninput = e => { voiceState.rate = Number(e.target.value); $('rate-val').textContent = toAr(voiceState.rate) + '×'; saveVoicePrefs(); };
  $('voice-test').onclick = () => {
    stopReading();
    const u = new SpeechSynthesisUtterance('أهلًا بك في مجلة التوجيه الطلابي. نَكبُر بالقيم.');
    const v = currentVoice(); if (v){ u.voice = v; u.lang = v.lang; }
    u.rate = voiceState.rate;
    speechSynthesis.speak(u);
  };
  if ('speechSynthesis' in window){
    loadVoices();
    speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
  }
}

document.addEventListener('keydown', e => {
  if (['TEXTAREA','INPUT'].includes(document.activeElement.tagName)) return;
  if ($('viewer').classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft') go(current+1);
  if (e.key === 'ArrowRight') go(current-1);
});

/* =========================================================
   الاسم في العناوين + الأيقونات الثابتة
   ========================================================= */
function applyOwnerName(){
  document.title = owner ? `${CONFIG.magazineTitle} | ${owner}` : `${CONFIG.magazineTitle} | نكبر بالقيم`;
  document.querySelectorAll('.js-mag-title').forEach(el => el.textContent = CONFIG.magazineTitle);
  document.querySelectorAll('.js-owner-line').forEach(el => el.textContent = owner ? `إعداد: ${owner}` : '');
  document.querySelectorAll('.js-owner-small').forEach(el => el.textContent = owner ? `إعداد: ${owner}` : 'نسخة عامة');
  document.querySelectorAll('.js-owner-footer').forEach(el => el.textContent = owner ? `إعداد ${owner} • ` : '');
}
function applyStaticIcons(){
  document.querySelectorAll('[data-icon]').forEach(el => {
    const big = el.classList.contains('logo-lg');
    el.innerHTML = ic(el.dataset.icon, big ? 30 : (el.classList.contains('logo') ? 24 : 18), 2);
  });
  document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(Number(b.dataset.go)));
  setSpeak(false);
}

/* =========================================================
   المعاينة (مرة واحدة لمدة ٣٠ دقيقة)
   ========================================================= */
const store = {
  get(){ try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)); } catch { return null; } },
  set(v){ try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(v)); } catch {} }
};

function show(id){
  ['gate','expired','viewer'].forEach(s => $(s).classList.toggle('hidden', s !== id));
}

function openViewer(){
  show('viewer');
  const initial = parseInt(location.hash.replace('#page-','')) - 1;
  go(Number.isFinite(initial) && initial >= 0 && initial < pages.length ? initial : 0);
}

let timer;
function endPreview(){
  clearInterval(timer);
  window.speechSynthesis?.cancel();
  const s = store.get() || {};
  s.finished = true; store.set(s);
  document.body.classList.remove('has-preview');
  history.replaceState(null, '', location.pathname);
  show('expired');
}

function startClock(deadline){
  document.body.classList.add('has-preview');
  $('preview-controls').classList.remove('hidden');
  const tick = () => {
    const left = deadline - Date.now();
    if (left <= 0) return endPreview();
    $('preview-clock').textContent = Math.floor(left/60000) + ':' + String(Math.floor(left/1000)%60).padStart(2,'0');
  };
  tick();
  timer = setInterval(tick, 1000);
}

function init(){
  applyOwnerName();
  applyStaticIcons();
  setupVoicePanel();

  // لإعادة المعاينة في نفس المتصفح (للتجربة): افتحي الرابط مع ?reset في آخره
  if (new URLSearchParams(location.search).has('reset')) {
    try { localStorage.removeItem(CONFIG.storageKey); } catch {}
    history.replaceState(null, '', location.pathname);
  }

  if (!CONFIG.previewEnabled) return openViewer();

  const s = store.get();
  if (s && (s.finished || Date.now() >= s.deadline)) return show('expired');
  if (s && s.deadline) { startClock(s.deadline); return openViewer(); }

  show('gate');
  $('start-preview').onclick = () => {
    const deadline = Date.now() + CONFIG.previewMinutes * 60000;
    store.set({deadline, finished:false});
    startClock(deadline);
    openViewer();
  };
}

$('finish-preview').onclick = () => {
  if (confirm('إنهاء المعاينة؟ لن تتمكني من فتحها مجددًا في هذا المتصفح.')) endPreview();
};

init();
