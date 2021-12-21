$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Optimistic Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Synapse               ", `<a href='synapse'    >Various</a>`,"SYN          ","https://synapseprotocol.com"],
      ["WePiggy               ", `<a href='wepiggy'    >Various</a>`,"WPC          ","https://app.wepiggy.com"],
      ["NYAN                  ", `<a href="nyan"       >Various</a>`,"NYAN         ","https://optinyan.xyz/"],
      ["ahegao.finance        ", `<a href="ahegao"     >Various</a>`,"AHEGAO       ","https://ahegao.finance"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();

}
