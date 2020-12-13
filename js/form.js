const amount = document.getElementById('amount')
const duration = document.getElementById('duration')
let formAmount = document.getElementById('formAmount')
let formTax = document.getElementById('formTax')
let formMonthly = document.getElementById('formMonthly')


addEventListener('change',e=()=>{
    if(amount.value==='5' && duration.value==='2'){
        formAmount.value ='\u00A35,944.80'
        formTax.value ='\u00A31,129.51'
        formMonthly.value ='\u00A3247.70'
    }
    else if(amount.value==='5' && duration.value==='3'){
        formAmount.value ='\u00A36246.00'
        formTax.value = '\u00A31186.74'
        formMonthly.value ='\u00A3173.50'
    }else if(amount.value==='5' && duration.value==='4'){
        formAmount.value ='\u00A36631.20'
        formTax.value = '\u00A31259.93'
        formMonthly.value ='\u00A3138.15'
    }else if(amount.value==='5' && duration.value==='5'){
        formAmount.value ='\u00A36864.00'
        formTax.value = '\u00A31304.16'
        formMonthly.value ='\u00A3114.40'
    }else if(amount.value==='10' && duration.value==='2'){
        formAmount.value ='\u00A311889.60'
        formTax.value = '\u00A32259.02'
        formMonthly.value ='\u00A3495.40'
    }else if(amount.value==='10' && duration.value==='3'){
        formAmount.value ='\u00A312492.00'
        formTax.value = '\u00A32373.48'
        formMonthly.value ='\u00A3347.00'
    }else if(amount.value==='10' && duration.value==='4'){
        formAmount.value ='\u00A313262.40'
        formTax.value = '\u00A32519.86'
        formMonthly.value ='\u00A3276.30'
    }else if(amount.value==='10' && duration.value==='5'){
        formAmount.value ='\u00A313262.40'
        formTax.value = '\u00A32519.86'
        formMonthly.value ='\u00A3276.30'
    }else if(amount.value==='15' && duration.value==='2'){
        formAmount.value ='\u00A317,834.40'
        formTax.value = '\u00A33,388.54'
        formMonthly.value ='\u00A3743.10'
    }else if(amount.value==='15' && duration.value==='3'){
        formAmount.value ='\u00A318,738.00'
        formTax.value = '\u00A33,560.22'
        formMonthly.value ='\u00A3520.50'
    }else if(amount.value==='15' && duration.value==='4'){
        formAmount.value ='\u00A319,893.60'
        formTax.value = '\u00A33,779.78'
        formMonthly.value ='\u00A3414.45'
    }else if(amount.value==='15' && duration.value==='5'){
        formAmount.value ='\u00A320,592.00'
        formTax.value = '\u00A33,912.48'
        formMonthly.value ='\u00A3343.20'
    }else if(amount.value==='20' && duration.value==='2'){
        formAmount.value ='\u00A323,616.00'
        formTax.value = '\u00A34,487.04'
        formMonthly.value ='\u00A3984.00'
    }else if(amount.value==='20' && duration.value==='3'){
        formAmount.value ='\u00A324,696.00'
        formTax.value = '\u00A34,692.24'
        formMonthly.value ='\u00A3686.00'
    }else if(amount.value==='20' && duration.value==='4'){
        formAmount.value ='\u00A325,843.20'
        formTax.value = '\u00A34,910.21'
        formMonthly.value ='\u00A3538.40'
    }else if(amount.value==='20' && duration.value==='5'){
        formAmount.value ='\u00A327,000.00'
        formTax.value = '\u00A35,130.00'
        formMonthly.value ='\u00A3450.00'
    }else if(amount.value==='25' && duration.value==='2'){
        formAmount.value ='\u00A329,520.00'
        formTax.value = '\u00A35,608.80'
        formMonthly.value ='\u00A31230.00'
    }else if(amount.value==='25' && duration.value==='3'){
        formAmount.value ='\u00A330,870.00'
        formTax.value = '\u00A3 5865.30'
        formMonthly.value ='\u00A3857.50'
    }else if(amount.value==='25' && duration.value==='4'){
        formAmount.value ='\u00A332,304.00'
        formTax.value = '\u00A36,137.76'
        formMonthly.value ='\u00A3673.00'
    }else if(amount.value==='25' && duration.value==='5'){
        formAmount.value ='\u00A333,750.00'
        formTax.value = '\u00A36,412.50'
        formMonthly.value ='\u00A3562.50'
    }else if(amount.value==='30' && duration.value==='2'){
        formAmount.value ='\u00A335,424.00'
        formTax.value = '\u00A36,730.56'
        formMonthly.value ='\u00A31476.00'
    }else if(amount.value==='30' && duration.value==='3'){
        formAmount.value ='\u00A337,044.00'
        formTax.value = '\u00A37,038.36'
        formMonthly.value ='\u00A31029.00'
    }else if(amount.value==='30' && duration.value==='4'){
        formAmount.value ='\u00A338,764.80'
        formTax.value = '\u00A37,365.31'
        formMonthly.value ='\u00A3807.60'
    }else if(amount.value==='30' && duration.value==='5'){
        formAmount.value ='\u00A340,500.00'
        formTax.value = '\u00A37,695.00'
        formMonthly.value ='\u00A3675.00'
    }else if(amount.value==='35' && duration.value==='2'){
        formAmount.value ='\u00A341,328.00'
        formTax.value = '\u00A37,852.32'
        formMonthly.value ='\u00A31722.00'
    }else if(amount.value==='35' && duration.value==='3'){
        formAmount.value ='\u00A343,218.00'
        formTax.value = '\u00A38,211.42'
        formMonthly.value ='\u00A31200.50'
    }else if(amount.value==='35' && duration.value==='4'){
        formAmount.value ='\u00A345,225.60'
        formTax.value = '\u00A38,592.86'
        formMonthly.value ='\u00A3942.20'
    }else if(amount.value==='35' && duration.value==='5'){
        formAmount.value ='\u00A347,250.00'
        formTax.value = '\u00A38,977.50'
        formMonthly.value ='\u00A3787.50'
    }else if(amount.value==='40' && duration.value==='2'){
        formAmount.value ='\u00A347,232.00'
        formTax.value = '\u00A38,974.08'
        formMonthly.value ='\u00A31968.00'
    }else if(amount.value==='40' && duration.value==='3'){
        formAmount.value ='\u00A349,392.00'
        formTax.value = '\u00A39,384.48'
        formMonthly.value ='\u00A31372.00'
    }else if(amount.value==='40' && duration.value==='4'){
        formAmount.value ='\u00A351,686.40'
        formTax.value = '\u00A39,820.42'
        formMonthly.value ='\u00A31076.80'
    }else if(amount.value==='40' && duration.value==='5'){
        formAmount.value ='\u00A354,000.00'
        formTax.value = '\u00A310,260.00'
        formMonthly.value ='\u00A3900.00'
    }else if(amount.value==='45' && duration.value==='2'){
        formAmount.value ='\u00A353,136.00'
        formTax.value = '\u00A310,095.84'
        formMonthly.value ='\u00A32214.00'
    }else if(amount.value==='45' && duration.value==='3'){
        formAmount.value ='\u00A355,566.00'
        formTax.value = '\u00A310,557.54'
        formMonthly.value ='\u00A31543.50'
    }else if(amount.value==='45' && duration.value==='4'){
        formAmount.value ='\u00A358,147.20'
        formTax.value = '\u00A311,047.97'
        formMonthly.value ='\u00A31211.40'
    }else if(amount.value==='45' && duration.value==='5'){
        formAmount.value ='\u00A360,750.00'
        formTax.value = '\u00A311,542.50'
        formMonthly.value ='\u00A31012.50'
    }else if(amount.value==='50' && duration.value==='2'){
        formAmount.value ='\u00A358,764.00'
        formTax.value = '\u00A311,165.16'
        formMonthly.value ='\u00A32448.50'
    }else if(amount.value==='50' && duration.value==='3'){
        formAmount.value =' \u00A361,380.00'
        formTax.value = ' \u00A311,662.20'
        formMonthly.value =' \u00A31705.00'
    }else if(amount.value==='50' && duration.value==='4'){
        formAmount.value =' \u00A364,032.00'
        formTax.value = ' \u00A312,166.08'
        formMonthly.value =' \u00A31334.00'
    }else if(amount.value==='50' && duration.value==='5'){
        formAmount.value =' \u00A366,750.00 '
        formTax.value = ' \u00A312,682.50'
        formMonthly.value =' \u00A31112.50'
    }
})
//' \u00A3 +51.26'
