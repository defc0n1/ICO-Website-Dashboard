define({ "api": [
  {
    "type": "get",
    "url": "/auth/confirm",
    "title": "",
    "name": "Confirm_Registration",
    "version": "0.0.1",
    "group": "Authentication",
    "description": "<p>Define Confirm Registration process information</p>",
    "examples": [
      {
        "title": "usage:",
        "content": "curl -i https://discoverblockchain.io:9844/v1/auth/confirm",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>Encrypted identifier sent to user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>Token of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Confirmation Success",
          "content": "HTTP/1.1 200 OK\n{\n\"status\":\"success\",\n\"next\":\"Confirmation success\",\n\"statusInt\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Could",
            "description": "<p>not confirm user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Confirming user",
          "content": "HTTP/1.1 401 unauthorized\n{\n\"status:\"error\",\n\"next\":\"Invalid confirmation or user. Try again\",\n\"debug\":[]\n\"statusInt\":0,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/auth.controller.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://discoverblockchain.io:9488/v1/auth/confirm"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "",
    "name": "Login",
    "version": "0.0.1",
    "group": "Authentication",
    "description": "<p>Define Login process information</p>",
    "examples": [
      {
        "title": "usage:",
        "content": "curl -i https://discoverblockchain.io:9844/v1/auth/login",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password must have min length of 6, one caps and one symbol</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[json] Sample login",
          "content": "{\n\"email\":\"martinchuka@discoverblockchain.com\",\n\"password\":\"nothing\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Success",
          "content": "HTTP/1.1 200 OK\n{\n\"token\":\"YkdaeKhianfoajhieaoOJUIJGHI2356\",\n\"status\":\"success\",\n\"next\":\"Login successful\",\n\"statusInt\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidLogin",
            "description": "<p>Invalid login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Login in",
          "content": "HTTP/1.1 401 unauthorized\n{\n\"status:\"error\",\n\"next\":\"Invalid Login. Try again\",\n\"debug\":[]\n\"statusInt\":0,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/auth.controller.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://discoverblockchain.io:9488/v1/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "",
    "name": "Registration",
    "version": "0.0.1",
    "group": "Authentication",
    "description": "<p>Define Registration process information</p>",
    "examples": [
      {
        "title": "usage:",
        "content": "curl -i https://discoverblockchain.io:9844/v1/auth/registration",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middlename",
            "description": "<p>Middlename of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "DOB",
            "description": "<p>of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>id from country table  see /country/list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password must have min length of 6, one caps and one symbol</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example parameter for registration",
          "content": "{\n\"firstname\":\"martin\",\n\"lastname\":\"john\",\n\"middlename\":\"doe\",\n\"country\":1,\n\"state\":2,\n\"address\":\"inland town\",\n\"mobile\":8162558889,\n\"DOB\":\"2018-10-20\",\n\"email\":\"martinchuka@discoverblockchain.io\",\n\"password\":\"nothing\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middlename",
            "description": "<p>Middlename of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DOB",
            "description": "<p>Date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>id Country of Origin</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>number Mobile number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Registration Success",
          "content": "HTTP/1.1 200 OK\n{\n\"status\":\"success\",\n\"next\":\"Registration Successful. Please check your email\",\n\"statusInt\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidLogin",
            "description": "<p>Invalid login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Login in",
          "content": "HTTP/1.1 501 unimplemented\n{\n\"status:\"error\",\n\"next\":\"Registration failed\",\n\"debug\":[\"provide a valid email\",\"username already exists\",\"password invalid\",']\n\"statusInt\":0,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/auth.controller.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://discoverblockchain.io:9488/v1/auth/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/sendconfirmation",
    "title": "",
    "name": "Send_Confirmation",
    "version": "0.0.1",
    "group": "Authentication",
    "description": "<p>Define prompt confirmation process information, This endpoint can only accept 5 same confirmation reason from user in 24hours</p>",
    "examples": [
      {
        "title": "usage:",
        "content": "curl -i https://discoverblockchain.io:9844/v1/auth/sendConfirmation",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Confirmation Success",
          "content": "HTTP/1.1 200 OK\n{\n\"status\":\"success\",\n\"next\":\"Confirmation sent\",\n\"statusInt\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Could",
            "description": "<p>not confirm user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Confirming user",
          "content": "HTTP/1.1 401 unauthorized\n{\n\"status:\"error\",\n\"next\":\"Confirmation Failed. Try again\",\n\"debug\":[\"Multiple confirmation code already issued\"]\n\"statusInt\":0,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/auth.controller.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://discoverblockchain.io:9488/v1/auth/sendconfirmation"
      }
    ]
  }
] });
