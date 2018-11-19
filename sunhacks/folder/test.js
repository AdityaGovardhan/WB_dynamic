const { google } = require('googleapis');
const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
const private_key =
  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUDndSXabEFgDD\ngguGd3rYlxfOCG6YZCpwWwCgexsAZkwXA+bk74zGRZhbyN6JLvh5eBUNJNCctVO4\nxDxRefrny3BCJA7CChAXg7/HQOo1FCmc1EpFG6P7qscB2mU3rfNfKIsF+Jths8tN\nyzRciDGM/te2wnlv6Xs/vYcNU/FilBWgKAgw1qCOGV5E7gm4j6SX84I3o2L5xI7G\nc8iB2eaxay713mjQeTh1qV3qXr1tPEAGgiO9HQcQdO+obCbSmDJMWuLBCI5ob89f\nrt23kf8dvNRtAvd7xStbNnVay6MmokguNl75x0YBHmlb2boYdY0PEaQt8l/hajGP\ngLubRa3DAgMBAAECggEAXKo3pTQMgGp3CfhFjgyfD4+zFNMldQ1saC20L+yrx3hs\nbrBDUS6HD0txQUadTEhMx1PcqyI30QsB219RVm9d37XMR/LWyh84mfX2M52f2vMF\nHiW8kMd72KlvjlU/3t1yWNZwLftN9xtoz4VpS7guIwVoAVKpW2ildZyeLApPFLqC\nGLJ+OWgAscY+KgCRKgQamXZLz3oGquwAs93QYxcPHw9hQ1oGKezpFdsYdM+uopE8\naCwYdql8HB3O6IGfDqeyvnyM9heQgkUX1UEGvTF3hKl46U5u7yYFDIzHgcERnCql\nwosz6u8X6U38yQPjWbC7oKZixVfeOZKe1QCJ/WJG/QKBgQD7/iFSfHCWxm/HqcTG\nZD1V+BsXl3aXinL+jeZFzlX38Ln/zCgCTpKWghHrIB6+witjV8V4h7N9kgOW+mHh\nrjD95V1+fSPWMnxlKAhhidjuNSPjGMIF2zD6sLUBwEkob9Urtem7+kzb7xADCvW3\n9M3JeVJ/YiJ/CWngnxQo0nvD5QKBgQDXbcEn7/B4q6Az8ISNHHxsGadf58YDOB+F\nijp5SOsHZFxr7aTrh4S27K9BMnySDW+5HXN+J1jgdfAh+Yejo3bpVK8+JwZPvfBt\nqQeThViEsKXxnyH7PrJyaEvBIHpgmeGWMNdZJaXOQorZDFhApQdpwNwCLqZEPd3+\n5Cyh9qXghwKBgQCj6BS8lnyVVdV3RZHciW7r8EmO+tIEl+VcdegGF8QLVeVl4OFV\nPs5SX6BQE8Bry9h08a5cS8gQMV1sYsgwByGOxBYgJD2fIY+QLI3nA8a6io4hNQVe\n0cf2B+J0lSIAz10U5Wp2/sPneoQrtoFFelIwbl2exbIyd2kK1e5C70XZkQKBgQDS\nsE2rYHd/nOKGSaFpXMW293QBUO0Qsu/pK6I6gf0Scq4NBBM6IoTCXkKcceLw+GEe\n21XbuGGszMt4ftGQUct3MdJd5869aFbe+OQm+8/xnc39vBOA4/Wj/KqyC7CED5tX\nxxal4jMBwYSH+BHLz1qrq+m/3J3RuewGYGPiVxYtuwKBgCvUBE0lf618ts4WkYOv\nyyID2CrZvu1I0JmLr5LOQdrwNbgfLKMuoLHtkpaKv1C2jK9uGtrPo7dVHJP7PPrK\nsatKjIbzaPYUtYaTlddLM1divSuwPzTsodlhCDSZaGFs3j1O6iipxGfuurp34cLI\nQGtJFVyu2Aagsrabp7L3mAHU\n-----END PRIVATE KEY-----\n';
const jwt = new google.auth.JWT(
  'wb-652@wb-dynamic.iam.gserviceaccount.com',
  null,
  private_key,
  scopes
);
// const apis = google.getSupportedAPIs

const view_id = '184827011';
google.analytics('v3').data.ga.get({
  auth: jwt,
  ids: 'ga:' + view_id,
  'start-date': '30daysAgo',
  'end-date': 'today',
  metrics: 'ga:pageviews'
});
