describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new serever to the table', function(){
    submitServerInfo();

    expect(serverTbody.childElementCount).toEqual(1);
    expect(serverTbody.firstChild.innerText).toContain('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverTbody.replaceChildren();
    serverId = 0;
    allServers = {};
  });
});
