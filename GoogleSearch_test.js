Feature('GoogleSearch');

Scenario('test something',  ( { I } ) => {
    I.amOnPage('/');
    I.wait(3);
    I.see('Gmail');
});

Scenario('test something-2',  ( { I } ) => {
    I.amOnPage('/');
    I.wait(3);
    I.see('About');
});

