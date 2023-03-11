describe('Helpers test',function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 5;
    });

    it('Should sum total tip of payments', function(){
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(5);

        billAmtInput.value = 200;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(15);
    });

    it('Should sum total bill of payments',function(){
        submitPaymentInfo();

        expect(sumPaymentTotal('bitAmt')).toEqual*=(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('Should sum total tip percent', function(){
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(5);

        billAmtInput.value = 200;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(10);
    })

    it('Should make a new td from value and append to tr on appendTd',function(){
        const newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });

    afterEach(function(){
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.replaceChildren();
        allPayments = {};
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});