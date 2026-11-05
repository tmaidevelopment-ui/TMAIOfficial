// =======================================================================
//  account.js  —  এই ফাইলটাই আপনার পুরো ওয়েবসাইটের কন্ট্রোল প্যানেল
//  শুধু এই ফাইলের লেখা/লিংক/ছবির নাম বদলান → GitHub-এ Push করুন → সাইট নিজে আপডেট হবে।
//  FFX.html বা server.js ছুঁতে হবে না।
//
//  নিয়ম:
//   * লেখা সবসময় "..." (ডাবল কোটেশন) এর ভেতরে রাখুন, শেষে কমা (,) দিন।
//   * ছবির নাম হুবহু লিখুন (বড়-ছোট হাতের অক্ষর ও স্পেস সহ) — ছবি FFX.html এর পাশের ফোল্ডারেই রাখুন।
//   * কোনো কার্ড মুছতে চাইলে { ... }, লাইনটা পুরো মুছে দিন। নতুন কার্ড চাইলে একটা লাইন কপি করে বদলান।
//   * কোনো লিস্ট পুরো ফাঁকা [ ] রাখলে ওই সেকশন ওয়েবসাইটে দেখাবে না।
// =======================================================================

// ---------------------------- ১. সাধারণ তথ্য ----------------------------
var website_name = "YASIN";               // ওয়েবসাইটের নাম (ট্যাব টাইটেল ও ফুটারে)

// ---------------------------- ২. ছবির নাম (লোগো ও ব্যানার) ----------------------------
var logo_image = "Main logo.jpg";         // হেডার লোগো + ফেভিকন
var notification_image = "Notification.jpg"; // প্রথমবার খুললে যে পপআপ আসে তার ছবি
var banner_images = [                      // হিরো স্লাইডারের ব্যানার (যত খুশি যোগ করুন, ১টা হলে স্লাইড হবে না)
  "Banner 1.jpg",
  "Banner 2.jpg",
  "Banner 3.jpg"
];

// ---------------------------- ৩. লিংক (পুরো সাইটে একসাথে বদলে যাবে) ----------------------------
var telegram_channel_link = "telegram channel link";   // ফাঁকা বা এই লেখা থাকলে বাটন কাজ করবে না
var telegram_group_link   = "telegram group link";
var youtube_channel_link  = "YouTube channel link";
var facebook_page_link    = "facebook page link";
var facebook_group_link   = "facebook group link";
var app_download_link     = "";                         // ফুটারের Google Play বাটনের লিংক

// ---------------------------- ৪. নোটিফিকেশন পপআপের লেখা ----------------------------
var notification_text = `সবথেকে কম দামে টপ করার জন্য সেরা ওয়েবসাইট
১০০% বিশ্বস্ত ও দ্রুত ডেলিভারিতে
অর্ডার করুন নিশ্চিন্তে ♥️`;

// =======================================================================
//  পেজ ১ : About Us
// =======================================================================
// আমাদের পরিচয় — প্রতিটি নতুন লাইন আলাদা অনুচ্ছেদ হবে
var about_text = `YASIN একটি প্রযুক্তিনির্ভর কোম্পানি। আমরা অ্যাপ, ওয়েবসাইট ও ডিজিটাল সার্ভিস তৈরি করে গ্রাহকদের দ্রুত, নিরাপদ ও নির্ভরযোগ্য সমাধান দিয়ে আসছি।
এখানে আপনার কোম্পানির লক্ষ্য, উদ্দেশ্য ও ইতিহাস লিখুন।`;

// আমাদের শাখা  (ছবি: বর্গাকার ১:১, যেমন 600×600)
var branches = [
  { name: "Branch 1", image: "Branch 1.jpg" },
  { name: "Branch 2", image: "Branch 2.jpg" },
  { name: "Branch 3", image: "Branch 3.jpg" }
];

// আমাদের অ্যাপ  (ছবি: ১:১) — link দিলে কার্ডে ক্লিক করলে লিংকে যাবে, না দিলে শুধু ছবি দেখাবে
var apps = [
  { name: "App 1", image: "App 1.jpg", link: "" },
  { name: "App 2", image: "App 2.jpg", link: "" },
  { name: "App 3", image: "App 3.jpg", link: "" },
  { name: "App 4", image: "App 4.jpg", link: "" },
  { name: "App 5", image: "App 5.jpg", link: "" },
  { name: "App 6", image: "App 6.jpg", link: "" }
];

// =======================================================================
//  পেজ ২ : Achievements
// =======================================================================
// অর্জন ও পুরস্কার  (ছবি: ১:১)
var achievements = [
  { name: "Achievement 1", image: "Achievement 1.jpg" },
  { name: "Achievement 2", image: "Achievement 2.jpg" },
  { name: "Achievement 3", image: "Achievement 3.jpg" },
  { name: "Achievement 4", image: "Achievement 4.jpg" },
  { name: "Achievement 5", image: "Achievement 5.jpg" },
  { name: "Achievement 6", image: "Achievement 6.jpg" }
];

// ইউটিউব ভিডিও — পুরো লিংক অথবা শুধু ভিডিও আইডি, দুটোই চলবে। একাধিক দিতে পারেন।
var video_links = [
  // "https://www.youtube.com/watch?v=XXXXXXXXXXX",
];

// =======================================================================
//  পেজ ৩ : Projects (কার্ডে ক্লিক করলে সরাসরি লাইভ ওয়েবসাইটে যাবে)
// =======================================================================
var projects = [
  { name: "Project 1", image: "Project 1.jpg", description: "প্রজেক্টের সংক্ষিপ্ত বিবরণ", link: "https://example.com" },
  { name: "Project 2", image: "Project 2.jpg", description: "প্রজেক্টের সংক্ষিপ্ত বিবরণ", link: "https://example.com" },
  { name: "Project 3", image: "Project 3.jpg", description: "প্রজেক্টের সংক্ষিপ্ত বিবরণ", link: "https://example.com" },
  { name: "Project 4", image: "Project 4.jpg", description: "প্রজেক্টের সংক্ষিপ্ত বিবরণ", link: "https://example.com" },
  { name: "Project 5", image: "Project 5.jpg", description: "প্রজেক্টের সংক্ষিপ্ত বিবরণ", link: "https://example.com" },
  { name: "Project 6", image: "Project 6.jpg", description: "প্রজেক্টের সংক্ষিপ্ত বিবরণ", link: "https://example.com" }
];

// =======================================================================
//  পেজ ৪ : Roadmap
// =======================================================================
// ভবিষ্যৎ লক্ষ্য (নম্বর নিজে থেকেই বসবে)
var roadmap_goals = [
  { title: "প্রথম ধাপ",  description: "এখানে প্রথম লক্ষ্যের বিবরণ লিখুন।" },
  { title: "দ্বিতীয় ধাপ", description: "এখানে দ্বিতীয় লক্ষ্যের বিবরণ লিখুন।" },
  { title: "তৃতীয় ধাপ", description: "এখানে তৃতীয় লক্ষ্যের বিবরণ লিখুন।" },
  { title: "চতুর্থ ধাপ", description: "এখানে চতুর্থ লক্ষ্যের বিবরণ লিখুন।" }
];

// সুবিধাসমূহ
var benefits = [
  "দ্রুত ও নির্ভরযোগ্য সার্ভিস",
  "নিরাপদ ও বিশ্বস্ত প্ল্যাটফর্ম",
  "২৪/৭ সাপোর্ট ও সহায়তা",
  "নিয়মিত আপডেট ও নতুন ফিচার"
];

// প্রমাণ ও ডকুমেন্টের থাম্বনেইল  (ছবি: ১:১)
var documents = [
  { name: "Document 1", image: "Document 1.jpg" },
  { name: "Document 2", image: "Document 2.jpg" },
  { name: "Document 3", image: "Document 3.jpg" }
];

// পেজ ৫ : Community — কার্ডগুলো উপরের ৩ নম্বর অংশের লিংক থেকে (Facebook, Telegram, YouTube) নিজে থেকেই চলবে।
