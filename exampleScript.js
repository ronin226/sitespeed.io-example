module.exports = async function(context, commands) {

  await commands.navigate('https://edo2-tst.esphere.ru/');
  await commands.wait.byTime(10000);
try {

    await commands.wait.bySelector('input[name="login"]');
    await commands.click.bySelectorAndWait('input[name="login"]');
    await commands.click.bySelectorAndWait('input[name="login"]');
    await commands.addText.bySelector('\uE013bobtheuser', 'input[name="login"]'); // \uE013 - is a code for arrow up key input
    await commands.click.bySelectorAndWait('.notifications-icon-close');
    await commands.wait.bySelector('[type=submit]');
    context.log.info('submit existing checked now');
    await commands.click.bySelectorAndWait('[type=submit]');
    context.log.info('submit clicked now');
    await commands.wait.byTime(5000);
    await commands.wait.bySelector('input[name="password"]');
    await commands.addText.bySelector('12345qwer', 'input[name="password"]');
    await commands.click.bySelectorAndWait('[type=submit]');
    context.log.info('submit second time pressed now');
    await commands.wait.byTime(5000);
    
    await commands.measure.start('https://exaplepage.test/'); // there is actual recording happens
    await commands.measure.start('https://exaplepage.test/#/products'); // there is actual recording happens
    return commands.measure.start('https://exaplepage.test/counterparty/218'); // there is actual recording happens and return ends script execution
    } catch (e) {
    context.log.error(e);
    throw e;
  }
};
