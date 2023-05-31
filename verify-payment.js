async function verifyPayment (payment) {
    console.log(payment);

    console.log(payment.transaction_id);

    try {
        const url = 'https://jwhite.onrender.com/api/user/verify-payment';


        const data = {
            transaction_id: payment.transaction_id,
        };

        console.log(JSON.stringify(data));

        const req = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'auth-token': localStorage.getItem('token'),
                'tranx-id': payment.transaction_id,
                // 'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Mode': 'no-cors',
            },
        });

        const res = await req.json();
        console.log(req.body);
        console.log(res);
    } catch (error) {
        alert('Error confirming your payment. Try Again!');
    }
};