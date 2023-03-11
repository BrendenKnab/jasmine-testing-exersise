describe('Payments test', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 5;
    });

    it('should add update allPayments on submitPaymentInfo',function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('5');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(5);
    });

    it('should not update allPayments with not bill amout',function(){
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        submitPaymentInfo();

        expect(allPayments).toEqual({});
    });

    it('should add new row to the paymentTbody', function(){
        submitPaymentInfo();

        expect(paymentTbody.childElementCount).toEqual(1);
        expect(paymentTbody.lastChild.innerText).toContain('$100\t$5\t5%');
    });

    it('should update summaryTds with new amounts',function(){
        submitPaymentInfo();

        expect(summaryTds[0].innerHTML).toEqual('$' + sumPaymentTotal('billAmt'));
        expect(summaryTds[1].innerHTML).toEqual('$' + sumPaymentTotal('tipAmt'));
        expect(summaryTds[2].innerText).toEqual('5%');
    })

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