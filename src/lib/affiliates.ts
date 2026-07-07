// ─── AFFILIATE CONFIGURATION ────────────────────────────────────────────────
// Rules (see /disclosure): recommendations are decided first, affiliate
// programs checked afterward. Every page containing affiliate links shows a
// disclosure banner at the TOP of the page (Article.affiliate flag).
//
// SETUP, once the Amazon Associates (amazon.ca) account is approved:
// 1. Put the tracking ID (e.g. "thevettedsr-20") in AMAZON_ASSOCIATE_TAG.
// 2. In Associates Central, link the .ca account to other marketplaces and
//    create a OneLink instance; paste its adInstanceId into
//    ONELINK_INSTANCE_ID. The script tag is then injected site-wide from
//    __root.tsx and rewrites Amazon links to each visitor's local store.
// Until both are set, links still work: they go to amazon.ca untagged, so
// nothing on the site is ever broken while waiting for approval.

export const AMAZON_ASSOCIATE_TAG = ""; // e.g. "thevettedsr-20" once approved

// OneLink ad instance ID from Associates Central > Tools > OneLink.
export const ONELINK_INSTANCE_ID = "";

// Amazon OneLink script URL (MarketPlace=CA because our base links are .ca).
export const ONELINK_SCRIPT_SRC = ONELINK_INSTANCE_ID
  ? `https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=CA&adInstanceId=${ONELINK_INSTANCE_ID}`
  : "";

/** Build an amazon.ca search URL, tagged when the Associate tag is set. */
export function amazonSearchUrl(query: string): string {
  const base = `https://www.amazon.ca/s?k=${encodeURIComponent(query)}`;
  return AMAZON_ASSOCIATE_TAG ? `${base}&tag=${AMAZON_ASSOCIATE_TAG}` : base;
}
