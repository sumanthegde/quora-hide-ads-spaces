setInterval(() => {
  const a = document.getElementsByClassName("q-box qu-borderAll qu-borderRadius--small qu-borderColor--raised qu-boxShadow--small qu-mb--small qu-bg--raised");
  for (let e of a) {
    const SPONSERED = e.textContent.indexOf("Sponsored");
    const PROMOTED = e.textContent.indexOf("Promoted");
    if ((SPONSERED > -1 && SPONSERED < 100) || (PROMOTED > -1 && PROMOTED < 100)) {
      e.style.display = "none";
    }
  }
  const b = document.getElementsByClassName("spacing_log_question_page_ad");
  for (let e of b) {
    e.style.display = "none";
  }
  const c = document.getElementsByClassName("q-box qu-bg--white");
  for (let e of c) {
    const AD_BY = e.textContent.indexOf("Ad by");
    if (AD_BY > -1) {
      e.style.display = "none";
    }
  }
  const d = document.getElementsByClassName("q-sticky");
  for (let e of d) {
    e.style.display = "none";
  }
  const f = document.getElementsByClassName("q-box qu-borderTop");
  for (let e of f) {
    const SPONSERED = e.textContent.indexOf("Sponsored");
    const PROMOTED = e.textContent.indexOf("Promoted");
    if ((SPONSERED > -1 && SPONSERED < 100) || (PROMOTED > -1 && PROMOTED < 100)) {
      e.style.display = "none";
    }
  }
  const g = document.getElementsByClassName("q-box qu-pt--medium puppeteer_test_tribe_post_item_feed_story");
  for (let e of g){
    e.style.display = "none";
  }

  const h = document.getElementsByClassName("q-box qu-pt--medium puppeteer_test_tribe_post_item_feed_story qu-hover--bg--darken");
  for (let e of h){
    e.style.display = "none";
  }

}, 300);
