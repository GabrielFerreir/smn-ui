(function () {
    'use strict';

    angular
        .module('gear')
        .filter('grPhonenumber', grPhonenumber);

    function grPhonenumber() {
        return grPhonenumberFilter;

        function grPhonenumberFilter(phonenumber) {
            if (!phonenumber) return '';
            phonenumber = phonenumber.toString().replace(/[^0-9]+/g,'');
            if (phonenumber.length > 4 && phonenumber.length < 9)
                phonenumber = phonenumber.substring(0,4) + '-' + phonenumber.substring(4);
            else if (phonenumber.length > 8)
                phonenumber = phonenumber.substring(0,5) + '-' + phonenumber.substring(5);
            if (phonenumber.length > 10)
                phonenumber = phonenumber.substring(0,10);
            return phonenumber;
        }
    }

})();

