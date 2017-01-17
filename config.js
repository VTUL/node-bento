var config = {};

//LibGuides configuration
config.libguidesUrl = "https://lgapi.libapps.com/1.1/guides?"
config.libguidesKey = "";
config.site_id = "";

//Summon configuration
config.summonResponse = "application/json";
config.summonUrl = "api.summon.serialssolutions.com";
config.summonUri = "/2.0.0/search";
config.summonKey = "";
config.summonAccessId = ""; //Should include the semicolon. See Summon API documentation for more info. Example "Summon test;"

//Google Site Search configuration
config.googleKey = "";
config.cx = "";
config.fields = "items(title,link)";
config.googleUrl = "https://www.googleapis.com/customsearch/v1?";
config.VTresearchcx = "";

module.exports = config;