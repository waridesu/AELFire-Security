const amount = document.getElementById('amount')
const duration = document.getElementById('duration')
let formAmount = document.getElementById('formAmount')
let formTax = document.getElementById('formTax')
let formMonthly = document.getElementById('formMonthly')

addEventListener('change',e=()=>{
    if(amount.value==='5' && duration.value==='2'){
        formAmount.value = '\u00A35,000.00'
        formTax.value = '\u00A31,129.51'
        formMonthly.value = '\u00A3247.70'
    }
    else if(amount.value==='5' && duration.value==='3'){
        formAmount.value = '\u00A35,000.00'
        formTax.value = '\u00A31186.74'
        formMonthly.value ='\u00A3173.50'
    }else if(amount.value==='5' && duration.value==='4'){
        formAmount.value = '\u00A35,000.00'
        formTax.value = '\u00A31259.93'
        formMonthly.value ='\u00A3138.15'
    }else if(amount.value==='5' && duration.value==='5'){
        formAmount.value = '\u00A35,000.00'
        formTax.value = '\u00A31304.16'
        formMonthly.value ='\u00A3114.40'
    }else if(amount.value==='10' && duration.value==='2'){
        formAmount.value = '\u00A310,000.60'
        formTax.value = '\u00A32259.02'
        formMonthly.value ='\u00A3495.40'
    }else if(amount.value==='10' && duration.value==='3'){
        formAmount.value = '\u00A310,000.00'
        formTax.value = '\u00A32373.48'
        formMonthly.value ='\u00A3347.00'
    }else if(amount.value==='10' && duration.value==='4'){
        formAmount.value = '\u00A310,000.00'
        formTax.value = '\u00A32519.86'
        formMonthly.value ='\u00A3276.30'
    }else if(amount.value==='10' && duration.value==='5'){
        formAmount.value = '\u00A310,000.00'
        formTax.value = '\u00A32519.86'
        formMonthly.value ='\u00A3276.30'
    }else if(amount.value==='15' && duration.value==='2'){
        formAmount.value = '\u00A315,000.00'
        formTax.value = '\u00A33,388.54'
        formMonthly.value ='\u00A3743.10'
    }else if(amount.value==='15' && duration.value==='3'){
        formAmount.value = '\u00A315,000.00'
        formTax.value = '\u00A33,560.22'
        formMonthly.value ='\u00A3520.50'
    }else if(amount.value==='15' && duration.value==='4'){
        formAmount.value = '\u00A315,000.00'
        formTax.value = '\u00A33,779.78'
        formMonthly.value ='\u00A3414.45'
    }else if(amount.value==='15' && duration.value==='5'){
        formAmount.value = '\u00A315,000.00'
        formTax.value = '\u00A33,912.48'
        formMonthly.value ='\u00A3343.20'
    }else if(amount.value==='20' && duration.value==='2'){
        formAmount.value = '\u00A320,000.00'
        formTax.value = '\u00A34,487.04'
        formMonthly.value ='\u00A3984.00'
    }else if(amount.value==='20' && duration.value==='3'){
        formAmount.value = '\u00A320,000.00'
        formTax.value = '\u00A34,692.24'
        formMonthly.value ='\u00A3686.00'
    }else if(amount.value==='20' && duration.value==='4'){
        formAmount.value = '\u00A320,000.00'
        formTax.value = '\u00A34,910.21'
        formMonthly.value ='\u00A3538.40'
    }else if(amount.value==='20' && duration.value==='5'){
        formAmount.value = '\u00A320,000.00'
        formTax.value = '\u00A35,130.00'
        formMonthly.value ='\u00A3450.00'
    }else if(amount.value==='25' && duration.value==='2'){
        formAmount.value = '\u00A325,000.00'
        formTax.value = '\u00A35,608.80'
        formMonthly.value ='\u00A31230.00'
    }else if(amount.value==='25' && duration.value==='3'){
        formAmount.value = '\u00A325,000.00'
        formTax.value = '\u00A3 5865.30'
        formMonthly.value ='\u00A3857.50'
    }else if(amount.value==='25' && duration.value==='4'){
        formAmount.value = '\u00A325,000.00'
        formTax.value = '\u00A36,137.76'
        formMonthly.value ='\u00A3673.00'
    }else if(amount.value==='25' && duration.value==='5'){
        formAmount.value = '\u00A325,000.00'
        formTax.value = '\u00A36,412.50'
        formMonthly.value ='\u00A3562.50'
    }else if(amount.value==='30' && duration.value==='2'){
        formAmount.value = '\u00A330,000.00'
        formTax.value = '\u00A36,730.56'
        formMonthly.value ='\u00A31476.00'
    }else if(amount.value==='30' && duration.value==='3'){
        formAmount.value = '\u00A330,000.00'
        formTax.value = '\u00A37,038.36'
        formMonthly.value ='\u00A31029.00'
    }else if(amount.value==='30' && duration.value==='4'){
        formAmount.value = '\u00A330,000.00'
        formTax.value = '\u00A37,365.31'
        formMonthly.value ='\u00A3807.60'
    }else if(amount.value==='30' && duration.value==='5'){
        formAmount.value = '\u00A330,000.00'
        formTax.value = '\u00A37,695.00'
        formMonthly.value ='\u00A3675.00'
    }else if(amount.value==='35' && duration.value==='2'){
        formAmount.value = '\u00A335,000.00'
        formTax.value = '\u00A37,852.32'
        formMonthly.value ='\u00A31722.00'
    }else if(amount.value==='35' && duration.value==='3'){
        formAmount.value = '\u00A335,000.00'
        formTax.value = '\u00A38,211.42'
        formMonthly.value ='\u00A31200.50'
    }else if(amount.value==='35' && duration.value==='4'){
        formAmount.value = '\u00A335,000.00'
        formTax.value = '\u00A38,592.86'
        formMonthly.value ='\u00A3942.20'
    }else if(amount.value==='35' && duration.value==='5'){
        formAmount.value = '\u00A335,000.00'
        formTax.value = '\u00A38,977.50'
        formMonthly.value ='\u00A3787.50'
    }else if(amount.value==='40' && duration.value==='2'){
        formAmount.value = '\u00A340,000.00'
        formTax.value = '\u00A38,974.08'
        formMonthly.value ='\u00A31968.00'
    }else if(amount.value==='40' && duration.value==='3'){
        formAmount.value = '\u00A340,000.00'
        formTax.value = '\u00A39,384.48'
        formMonthly.value ='\u00A31372.00'
    }else if(amount.value==='40' && duration.value==='4'){
        formAmount.value = '\u00A340,000.00'
        formTax.value = '\u00A39,820.42'
        formMonthly.value ='\u00A31076.80'
    }else if(amount.value==='40' && duration.value==='5'){
        formAmount.value = '\u00A340,000.00'
        formTax.value = '\u00A310,260.00'
        formMonthly.value ='\u00A3900.00'
    }else if(amount.value==='45' && duration.value==='2'){
        formAmount.value = '\u00A345,000.00'
        formTax.value = '\u00A310,095.84'
        formMonthly.value ='\u00A32214.00'
    }else if(amount.value==='45' && duration.value==='3'){
        formAmount.value = '\u00A345,000.00'
        formTax.value = '\u00A310,557.54'
        formMonthly.value ='\u00A31543.50'
    }else if(amount.value==='45' && duration.value==='4'){
        formAmount.value = '\u00A345,000.00'
        formTax.value = '\u00A311,047.97'
        formMonthly.value ='\u00A31211.40'
    }else if(amount.value==='45' && duration.value==='5'){
        formAmount.value = '\u00A345,000.00'
        formTax.value = '\u00A311,542.50'
        formMonthly.value ='\u00A31012.50'
    }else if(amount.value==='50' && duration.value==='2'){
        formAmount.value = '\u00A350,000.00'
        formTax.value = '\u00A311,165.16'
        formMonthly.value ='\u00A32448.50'
    }else if (amount.value === '50' && duration.value === '3') {
        formAmount.value = '\u00A350,000.00'
        formTax.value = '\u00A311,662.20'
        formMonthly.value = '\u00A31705.00'
    } else if (amount.value === '50' && duration.value === '4') {
        formAmount.value = '\u00A350,000.00'
        formTax.value = '\u00A312,166.08'
        formMonthly.value = '\u00A31334.00'
    } else if (amount.value === '50' && duration.value === '5') {
        formAmount.value = '\u00A350,000.00'
        formTax.value = '\u00A312,682.50'
        formMonthly.value = '\u00A31112.50'
    } else if (amount.value === '55' && duration.value === '2') {
        formAmount.value = '\u00A355,000.00'
        formTax.value = '\u00A312,281.68'
        formMonthly.value = '\u00A32693.35'
    } else if (amount.value === '55' && duration.value === '3') {
        formAmount.value = '\u00A355,000.00'
        formTax.value = '\u00A312,828.42'
        formMonthly.value = '\u00A31875.50'
    } else if (amount.value === '55' && duration.value === '4') {
        formAmount.value = '\u00A355,000.00'
        formTax.value = '\u00A313,382.69'
        formMonthly.value = '\u00A31467.40'
    } else if (amount.value === '55' && duration.value === '5') {
        formAmount.value = '\u00A355,000.00'
        formTax.value = '\u00A313,950.75'
        formMonthly.value = '\u00A31223.75'
    } else if (amount.value === '60' && duration.value === '2') {
        formAmount.value = '\u00A360,000.00'
        formTax.value = '\u00A313,398.19'
        formMonthly.value = '\u00A32938.20'
    } else if (amount.value === '60' && duration.value === '3') {
        formAmount.value = '\u00A360,000.00'
        formTax.value = '\u00A313,994.64'
        formMonthly.value = '\u00A32046.00'
    } else if (amount.value === '60' && duration.value === '4') {
        formAmount.value = '\u00A360,000.00'
        formTax.value = '\u00A314,599.30'
        formMonthly.value = '\u00A31600.80'
    } else if (amount.value === '60' && duration.value === '5') {
        formAmount.value = '\u00A360,000.00'
        formTax.value = '\u00A315,219.00'
        formMonthly.value = '\u00A31335.00'
    } else if (amount.value === '65' && duration.value === '2') {
        formAmount.value = '\u00A365,000.00'
        formTax.value = '\u00A314,514.71'
        formMonthly.value = '\u00A33183.05'
    } else if (amount.value === '65' && duration.value === '3') {
        formAmount.value = '\u00A365,000.00'
        formTax.value = '\u00A315,160.86'
        formMonthly.value = '\u00A32216.50'
    } else if (amount.value === '65' && duration.value === '4') {
        formAmount.value = ' \u00A365,000.00'
        formTax.value = '\u00A315,815.90'
        formMonthly.value = '\u00A31734.20'
    } else if (amount.value === '65' && duration.value === '5') {
        formAmount.value = '\u00A365,000.00'
        formTax.value = '\u00A316,487.25'
        formMonthly.value = '\u00A31446.25'
    } else if (amount.value === '70' && duration.value === '2') {
        formAmount.value = '\u00A370,000.00'
        formTax.value = '\u00A315,631.22'
        formMonthly.value = '\u00A33427.90'
    } else if (amount.value === '70' && duration.value === '3') {
        formAmount.value = '\u00A370,000.00'
        formTax.value = '\u00A316,327.08'
        formMonthly.value = '\u00A32387.00'
    } else if (amount.value === '70' && duration.value === '4') {
        formAmount.value = '\u00A370,000.00'
        formTax.value = '\u00A317,032.51'
        formMonthly.value = '\u00A31867.60'
    } else if (amount.value === '70' && duration.value === '5') {
        formAmount.value = '\u00A370,000.00'
        formTax.value = '\u00A317,755.50'
        formMonthly.value = '\u00A31557.50'
    } else if (amount.value === '75' && duration.value === '2') {
        formAmount.value = '\u00A375,000.00'
        formTax.value = '\u00A316,747.74'
        formMonthly.value = '\u00A33672.75'
    } else if (amount.value === '75' && duration.value === '3') {
        formAmount.value = '\u00A375,000.00'
        formTax.value = '\u00A317,493.30'
        formMonthly.value = '\u00A32557.50'
    } else if (amount.value === '75' && duration.value === '4') {
        formAmount.value = '\u00A375,000.00'
        formTax.value = '\u00A318,249.12'
        formMonthly.value = '\u00A32001.00'
    } else if (amount.value === '75' && duration.value === '5') {
        formAmount.value = '\u00A375,000.00'
        formTax.value = '\u00A319,023.75'
        formMonthly.value = '\u00A31668.75'
    } else if (amount.value === '80' && duration.value === '2') {
        formAmount.value = '\u00A380,000.00'
        formTax.value = '\u00A317,864.26'
        formMonthly.value = '\u00A33917.60'
    } else if (amount.value === '80' && duration.value === '3') {
        formAmount.value = '\u00A380,000.00'
        formTax.value = '\u00A318,659.52'
        formMonthly.value = '\u00A32728.00'
    } else if (amount.value === '80' && duration.value === '4') {
        formAmount.value = '\u00A380,000.00'
        formTax.value = '\u00A319,465.73'
        formMonthly.value = '\u00A32134.40'
    } else if (amount.value === '80' && duration.value === '5') {
        formAmount.value = '\u00A380,000.00'
        formTax.value = '\u00A320,292.00'
        formMonthly.value = '\u00A31780.00'
    } else if (amount.value === '85' && duration.value === '2') {
        formAmount.value = '\u00A385,000.00'
        formTax.value = '\u00A318,980.77'
        formMonthly.value = '\u00A34162.45'
    } else if (amount.value === '85' && duration.value === '3') {
        formAmount.value = '\u00A385,000.00'
        formTax.value = '\u00A319,825.74'
        formMonthly.value = '\u00A32898.50'
    } else if (amount.value === '85' && duration.value === '4') {
        formAmount.value = '\u00A385,000.00'
        formTax.value = '\u00A320,682.34'
        formMonthly.value = '\u00A32267.80'
    } else if (amount.value === '85' && duration.value === '5') {
        formAmount.value = '\u00A385,000.00'
        formTax.value = '\u00A321,560.25'
        formMonthly.value = '\u00A31891.25'
    } else if (amount.value === '90' && duration.value === '2') {
        formAmount.value = '\u00A390,000.00'
        formTax.value = '\u00A320,097.29'
        formMonthly.value = '\u00A34407.30'
    } else if (amount.value === '90' && duration.value === '3') {
        formAmount.value = '\u00A390,000.00'
        formTax.value = '\u00A320,991.96'
        formMonthly.value = '\u00A33069.00'
    } else if (amount.value === '90' && duration.value === '4') {
        formAmount.value = '\u00A390,000.00'
        formTax.value = '\u00A321,898.94'
        formMonthly.value = '\u00A32401.20'
    } else if (amount.value === '90' && duration.value === '5') {
        formAmount.value = '\u00A390,000.00'
        formTax.value = '\u00A322,828.50'
        formMonthly.value = '\u00A32002.50'
    } else if (amount.value === '95' && duration.value === '2') {
        formAmount.value = '\u00A395,000.00'
        formTax.value = '\u00A321,213.80'
        formMonthly.value = '\u00A34652.15'
    } else if (amount.value === '95' && duration.value === '3') {
        formAmount.value = '\u00A395,000.00'
        formTax.value = '\u00A322,158.18'
        formMonthly.value = '\u00A33239.50'
    } else if (amount.value === '95' && duration.value === '4') {
        formAmount.value = '\u00A395,000.00'
        formTax.value = '\u00A323,115.55'
        formMonthly.value = '\u00A32534.60'
    } else if (amount.value === '95' && duration.value === '5') {
        formAmount.value = '\u00A395,000.00'
        formTax.value = '\u00A324,096.75'
        formMonthly.value = '\u00A32113.75'
    } else if (amount.value === '100' && duration.value === '2') {
        formAmount.value = '\u00A3100,000.00'
        formTax.value = '\u00A322,330.32'
        formMonthly.value = '\u00A34897.00'
    } else if (amount.value === '100' && duration.value === '3') {
        formAmount.value = '\u00A3100,000.00'
        formTax.value = ' \u00A323,324.40'
        formMonthly.value = '\u00A33410.00'
    } else if (amount.value === '100' && duration.value === '4') {
        formAmount.value = '\u00A3100,000.00'
        formTax.value = '\u00A324,332.16'
        formMonthly.value = '\u00A32668.00'
    } else if (amount.value === '100' && duration.value === '5') {
        formAmount.value = '\u00A3100,000.00'
        formTax.value = '\u00A325,365.00'
        formMonthly.value = '\u00A32225.00'
    }
})
