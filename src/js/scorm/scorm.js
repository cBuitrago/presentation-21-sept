/*
 * @author Massimo Canonico
 */
define
(
    [
        "scorm_connector",
        "scorm_constants",
        "lzstring"
    ],
    function(connector, CONST, LZString)
    {
        var _online = false;
        var _local = false;
        var _localId;
        var _startTime;
        
        var _data = {};
        
        var _connectOnline = function()
        {
            if (_local)
            {
                throw CONST.ERROR.E_104;
            }
            
            if (connector.api())
                _online = true;
            else
                throw CONST.ERROR.E_102;
            
            window.addEventListener("beforeunload", scorm.close);
            window.addEventListener("unload", scorm.close);
            
            _startTime = new Date();
        }
        
        var _isOnline = function()
        {
            return _online;
        }
        
        var _connectLocal = function(id)
        {
            if (_online)
            {
                throw CONST.ERROR.E_105;
            }
            
            _localId = id;
            
            if (localStorage[_localId] && localStorage[_localId] != "")
            {
                _data = JSON.parse(localStorage[_localId]);
            }
            _local = true;
        }
        
        var _isLocal = function()
        {
            return _local;
        }
        
        var _studentId = function()
        {
            if (_data.studentId == null && _online)
                _data.studentId = connector.value(CONST.LMS.STUDENT_ID);
            
            return _data.studentId;
        }
        
        var _studentName = function()
        {
            if (_data.studentName == null && _online)
                _data.studentName = connector.value(CONST.LMS.STUDENT_NAME);
            
            return _data.studentName;
        }
        
        var _entry = function()
        {
            if (_data.entry == null && _online)
                _data.entry = connector.value(CONST.LMS.ENTRY);
            
            return _data.entry;
        }
        
        var _credit = function()
        {
            if (_data.credit == null && _online)
                _data.credit = connector.value(CONST.LMS.CREDIT);
            
            return _data.credit;
        }
        
        var _launchData = function()
        {
            if (_data.launchData == null && _online)
                _data.launchData = connector.value(CONST.LMS.LAUNCH_DATA);
            
            return _data.launchData;
        }
        
        var _lessonLocation = function(lessonLocation)
        {
            if (lessonLocation == null)
            {
                if (_data.lessonLocation == null && _online)
                    _data.lessonLocation = connector.value(CONST.LMS.LESSON_LOCATION);
            }
            else
            {
                _data.lessonLocation = lessonLocation;
                
                if (_local)
                    _writeLocal();
                else if (_online)
                    connector.value(CONST.LMS.LESSON_LOCATION, _data.lessonLocation);
            }
            
            return _data.lessonLocation;
        }
        
        var _scoreRaw = function(scoreRaw)
        {
            if (scoreRaw == null)
            {
                if (_data.scoreRaw == null && _online)
                    _data.scoreRaw = connector.value(CONST.LMS.SCORE_RAW);
            }
            else
            {
                _data.scoreRaw = scoreRaw;

                if (_local)
                    _writeLocal();
                else if (_online)
                    connector.value(CONST.LMS.SCORE_RAW, _data.scoreRaw);
            }
            return _data.scoreRaw;
        }
        
        var _scoreMin = function(scoreMin)
        {
            if (scoreMin == null)
            {
                if (_data.scoreMin == null && _online)
                    _data.scoreMin = connector.value(CONST.LMS.SCORE_MIN);
            }
            else
            {
                _data.scoreMin = scoreMin;

                if (_local)
                    _writeLocal();
                else if (_online)
                    connector.value(CONST.LMS.SCORE_MIN, _data.scoreMin);
            }
            return _data.scoreMin;
        }
        
        var _scoreMax = function(scoreMax)
        {
            if (scoreMax == null)
            {
                if (_data.scoreMax == null && _online)
                    _data.scoreMax = connector.value(CONST.LMS.SCORE_MAX);
            }
            else
            {
                _data.scoreMax = scoreMax;

                if (_local)
                    _writeLocal();
                else if (_online)
                    connector.value(CONST.LMS.SCORE_MAX, _data.scoreMax);
            }
            return _data.scoreMax;
        }
        
        var _lessonStatus = function(lessonStatus)
        {
            if (lessonStatus == null)
            {
                if (_data.lessonStatus == null && _online)
                    _data.lessonStatus = connector.value(CONST.LMS.LESSON_STATUS);
            }
            else
            {
                _data.lessonStatus = lessonStatus;

                if (_local)
                    _writeLocal();
                else if (_online)
                    connector.value(CONST.LMS.LESSON_STATUS, _data.lessonStatus);
            }
            return _data.lessonStatus;
        }
        
        var _suspendData = function(suspendData)
        {
            var suspendDataTemp;
            
            if (suspendData == null)
            {
                if (_data.suspendData == null && _online)
                {
                    suspendDataTemp = connector.value(CONST.LMS.SUSPEND_DATA);
                    if (suspendDataTemp != null & suspendDataTemp != "")
                    {
                        suspendDataTemp = LZString.decompressFromBase64(suspendDataTemp);
                        _data.suspendData = JSON.parse(suspendDataTemp);
                    }
                }
            }
            else
            {
                _data.suspendData = suspendData;

                if (_local)
                    _writeLocal();
                else if (_online)
                {
                    suspendDataTemp = JSON.stringify(_data.suspendData);
                    suspendDataTemp = LZString.compressToBase64(suspendDataTemp);
                    connector.value(CONST.LMS.SUSPEND_DATA, suspendDataTemp);
                }
            }
            return _data.suspendData;
        }
        
        var _sessionTime = function()
        {
            if (_startTime != null)
            {
                var sessionTime;
                var endingTime = new Date();
                
                var endingHours = endingTime.getHours() - _startTime.getHours();
                if(endingHours < 1000 && endingHours > 99)endingHours = "0"+endingHours;
                if(endingHours < 100 && endingHours > 9)endingHours = "00"+endingHours;
                if(endingHours < 10)endingHours = "000"+endingHours;

                var endingMinutes = "";
                if(endingTime.getMinutes() < _startTime.getMinutes())
                    endingMinutes = 60 - _startTime.getMinutes();
                else
                    endingMinutes = endingTime.getMinutes() - _startTime.getMinutes();
                if(endingMinutes < 10)
                    endingMinutes = "0"+endingMinutes;

                var endingSeconds = "";
                if(endingTime.getSeconds() < _startTime.getSeconds())
                    endingSeconds = 60 - _startTime.getSeconds();
                else
                    endingSeconds = endingTime.getSeconds() - _startTime.getSeconds();

                if(endingSeconds < 10)
                    endingSeconds = "0"+endingSeconds;

                var sessionTime = endingHours+":"+endingMinutes+":"+endingSeconds;
                
                connector.value(CONST.LMS.SESSION_TIME, sessionTime);
                
                _startTime = null;
            }
        }
        
        var _exit = function(exit)
        {
            if (_online)
                connector.value(CONST.LMS.EXIT, exit);
        }
        
        var _close = function()
        {
            _sessionTime();
            if (_lessonStatus() === CONST.STATUS.COMPLETED)
                _exit(CONST.EXIT.LOGOUT);
            else
                _exit(CONST.EXIT.SUSPEND);
            connector.finish();
            return true;
        }
        
        var _writeLocal = function()
        {
            localStorage[_localId] = JSON.stringify(_data);
        }
        
        var public = 
        {
            connectOnline: _connectOnline,
            isOnline: _isOnline,
            connectLocal: _connectLocal,
            isLocal: _isLocal,
            studentId: _studentId,
            studentName: _studentName,
            entry: _entry,
            credit: _credit,
            launchData: _launchData,
            lessonLocation: _lessonLocation,
            scoreRaw: _scoreRaw,
            scoreMin: _scoreMin,
            scoreMax: _scoreMax,
            lessonStatus: _lessonStatus,
            suspendData: _suspendData,
            close: _close
        }
        
        return public;
    }
);