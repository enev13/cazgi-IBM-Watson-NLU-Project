const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


function getNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NLUV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const NLU = new NLUV1 ({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
        serviceUrl: api_url,
    });
    return NLU;
}

const app = new express();

app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {
    params = {
        'url' : req.query.url,
        'features' : {
            'emotion' : {
                'document' : true
            }
        }
    }
    NLUInstance = getNLUInstance()
    NLUInstance.analyze(params).then(result => {return res.send(result.result.emotion.document.emotion)});
    
});

app.get("/url/sentiment", (req,res) => {
    params = {
        'url' : req.query.url,
        'features' : {
            'sentiment' : {
                'document' : true
            }
        }
    }
    NLUInstance = getNLUInstance()
    NLUInstance.analyze(params).then(result => {return res.send(result.result.sentiment.document.label)});
    
});

app.get("/text/emotion", (req,res) => {
    params = {
        'text' : req.query.text,
        'features' : {
            'emotion' : {
                'document' : true
            }
        }
    }
    NLUInstance = getNLUInstance()
    NLUInstance.analyze(params).then(result => {return res.send(result.result.emotion.document.emotion)});
    
});

app.get("/text/sentiment", (req,res) => {
    params = {
        'text' : req.query.text,
        'features' : {
            'sentiment' : {
                'document' : true
            }
        }
    }
    NLUInstance = getNLUInstance()
    NLUInstance.analyze(params).then(result => {return res.send(result.result.sentiment.document.label)});
    
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})