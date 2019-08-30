const express = require('express');
const path = require('path');
const favicon = require ('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookieParser');
const bodyParser = require('bodyParser');
const expressValidator = require('express-validator');

//Authentication Packages
const session = require('express-session');
