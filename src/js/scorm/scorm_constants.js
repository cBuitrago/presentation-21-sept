/*
 * @author Massimo Canonico
 */
define
(
    function()
    {
        var _status = {};
        Object.defineProperty(_status, "PASSED", {value:"passed", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_status, "FAILED", {value:"failed", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_status, "COMPLETED", {value:"completed", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_status, "INCOMPLETE", {value:"incomplete", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_status, "NOT_ATTEMPTED", {value:"not attempted", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_status, "BROWSED", {value:"browsed", writable:false, enumerable:false, configurable:false});
        
        var _exit = {}
        Object.defineProperty(_exit, "TIME_OUT", {value:"time-out", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_exit, "SUSPEND", {value:"suspend", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_exit, "LOGOUT", {value:"logout", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_exit, "EMPTY", {value:"", writable:false, enumerable:false, configurable:false});
        
        var _lms = {}
        Object.defineProperty(_lms, "STUDENT_ID", {value:"cmi.core.student_id", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "STUDENT_NAME", {value:"cmi.core.student_name", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "LESSON_LOCATION", {value:"cmi.core.lesson_location", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "CREDIT", {value:"cmi.core.credit", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "LESSON_STATUS", {value:"cmi.core.lesson_status", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "ENTRY", {value:"cmi.core.entry", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "SCORE_RAW", {value:"cmi.core.score.raw", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "SCORE_MAX", {value:"cmi.core.score.max", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "SCORE_MIN", {value:"cmi.core.score.min", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "TOTAL_TIME", {value:"cmi.core.total_time", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "SUSPEND_DATA", {value:"cmi.suspend_data", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "LAUNCH_DATA", {value:"cmi.launch_data", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "SESSION_TIME", {value:"cmi.core.session_time", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_lms, "EXIT", {value:"cmi.core.exit", writable:false, enumerable:false, configurable:false});
        
        var _error = {}
        Object.defineProperty(_error, "E_102", {value:"api connection failed", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_103", {value:"local write failed", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_104", {value:"scorm connection conflict already local", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_105", {value:"scorm connection conflict already online", writable:false, enumerable:false, configurable:false});
        
        Object.defineProperty(_error, "E_2101", {value:"General exception", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2201", {value:"Invalid argument error", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2202", {value:"Element cannot have children", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2203", {value:"Element not an array", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2301", {value:"Not initialized", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2401", {value:"Not implimented error", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2402", {value:"Invalid set value, element is a keyword", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2403", {value:"Element is read only", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2404", {value:"Element is write only", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_error, "E_2405", {value:"Incorrect data type", writable:false, enumerable:false, configurable:false});
        
        var public = 
        {
            STATUS: _status,
            EXIT: _exit,
            LMS: _lms,
            ERROR: _error
        }

        return public;
    }
);