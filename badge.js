function assignBadges() {
  let chunk =
    (webpackChunkdiscord_app.push([
      [""],
      {},
      (e) => {
        m = [];
        for (let chunk in e.c) m.push(e.c[chunk]);
      },
    ]),
    m);

  let user = chunk
    .find((m) => m?.exports?.default?.getCurrentUser)
    .exports.default.getCurrentUser();

  let userProfile = chunk.find((m) => m?.exports?.default?.getUserProfile)
    .exports.default;

  let profile = userProfile.getUserProfile(user.id);

 profile.badges = [
    { // スタッフバッジ
      id: "staff",
      description: "Discord Staff",
      icon: "5e74e9b61934fc1f67c65515d1f7e60d",
      link: "https://discord.com/company",
    },
    { // パートナーバッジ
      id: "partner",
      description: "Partnered Server Owner",
      icon: "3f9748e53446a137a052f3454e2de41e",
      link: "https://discord.com/partners",
    },
    { // Discordモデレーターバッジ
      id: "certified_moderator",
      description: "Moderator Programs Alumni",
      icon: "fee1624003e2fee35cb398e125dc479b",
      link: "https://discord.com/safety",
    },
    { // hypesquadバッジ
      id: "hypesquad",
      description: "HypeSquad Events",
      icon: "bf01d1073931f921909045f3a39fd264",
      link: "https://discord.com/hypesquad",
    },
    { // この１，２，３は自分で取得できるから正直いらん
      id: "hypesquad_house_1",
      description: "HypeSquad Bravery",
      icon: "8a88d63823d8a71cd5e390baa45efa02",
      link: "https://discord.com/settings/hypesquad-online",
    },
    {
      id: "hypesquad_house_2",
      description: "HypeSquad Brilliance",
      icon: "011940fd013da3f7fb926e4a1cd2e618",
      link: "https://discord.com/settings/hypesquad-online",
    },
    {
      id: "hypesquad_house_3",
      description: "HypeSquad Balance",
      icon: "3aa41de486fa12454c3761e8e223442e",
      link: "https://discord.com/settings/hypesquad-online",
    },
    { // バグハンターバッジ(緑)
      id: "bug_hunter_level_1",
      description: "Discord Bug Hunter",
      icon: "2717692c7dca7289b35297368a940dd0",
      link: "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs",
    },
    { // バグハンターバッジ(金)
      id: "bug_hunter_level_2",
      description: "Discord Bug Hunter",
      icon: "848f79194d4be5ff5f81505cbd0ce1e6",
      link: "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs",
    },
    { // アクティブデベロッパーバッジ
      id: "active_developer",
      description: "Active Developer",
      icon: "6bdc42827a38498929a4920da12695d9",
      link: "https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge",
    },
    { // 認証済デベロッパーバッジ
      id: "verified_developer",
      description: "Early Verified Bot Developer",
      icon: "6df5892e0f35b051f8b61eace34f4967",
    },
    { //　早期サポーターバッジ(ワンパスの顔のやつ)
      id: "early_supporter",
      description: "Early Supporter",
      icon: "7060786766c9c840eb3019e725d2b358",
      link: "https://discord.com/settings/premium",
    },
    { // nitroバッジ
      id: "premium",
      description: "Subscriber since Dec 22, 2016",
      icon: "2ba85e8026a8614b640c2837bcdfe21b",
      link: "https://discord.com/settings/premium",
    },
   /* ブーストレベル１〜８
   {
      id: "guild_booster_lvl1",
      description: "Server boosting since May 4, 2023",
      icon: "51040c70d4f20a921ad6674ff86fc95c",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl2",
      description: "Server boosting since Mar 11, 2023",
      icon: "0e4080d1d333bc7ad29ef6528b6f2fb7",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl3",
      description: "Server boosting since Feb 23, 2023",
      icon: "72bed924410c304dbe3d00a6e593ff59",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl4",
      description: "Server boosting since Sep 17, 2022",
      icon: "df199d2050d3ed4ebf84d64ae83989f8",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl5",
      description: "Server boosting since Aug 1, 2022",
      icon: "996b3e870e8a22ce519b3a50e6bdd52f",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl6",
      description: "Server boosting since Mar 26, 2022",
      icon: "991c9f39ee33d7537d9f408c3e53141e",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl7",
      description: "Server boosting since Feb 4, 2022",
      icon: "cb3ae83c15e970e8f3d410bc62cb8b99",
      link: "https://discord.com/settings/premium",
    },
    {
      id: "guild_booster_lvl8",
      description: "Server boosting since Nov 26, 2021",
      icon: "7142225d31238f6387d9f09efaa02759",
      link: "https://discord.com/settings/premium",
    },
*/
    { // ブーストバッジ(lv.9)
      id: "guild_booster_lvl9",
      description: "Server boosting since Sep 6, 2020",
      icon: "ec92202290b48d0879b7413d2dde3bab",
      link: "https://discord.com/settings/premium",
    },
    { // 旧ユーザー名バッジ
      id: "legacy_username",
      description: "Originally known as " + profile.legacyUsername,
      icon: "6de6d34650760ba5551a79732e98ed60",
    }, 
  ];

  console.log(
    "'assianBadges'を有効化しました。\n\n注意: バッジがリセットされたら、コンソールで`assignBadges()`を使用してください"
  );
}

assignBadges();

// 常時起動用
setInterval(assignBadges, 1000);
