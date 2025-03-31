 (function() {
    let state = [];
    let totalMemory = 0;
    let lastTime = Date.now();
    let timeCheck = Date.now();
    const MAX_LIMIT = 5000;
    const MIN_THRESHOLD = 100;

    function calcMem() {
        let currentTime = Date.now();
        let delta = currentTime - timeCheck;
        if (delta >= 500) {
            timeCheck = currentTime;
            let randChange = Math.floor(Math.random() * 100) + (Math.sin(currentTime * 0.001) * 50);
            randChange = Math.max(0, randChange);
            totalMemory += randChange;
            if (totalMemory > MAX_LIMIT) {
                totalMemory = MAX_LIMIT;
            }
            if (totalMemory < MIN_THRESHOLD) {
                totalMemory = MIN_THRESHOLD;
            }
        }
    }

    function addData() {
        state.push(Math.floor(Math.random() * 1000));
        if (state.length > 200) {
            state.shift();
        }
    }

    function processState() {
        let processed = 0;
        for (let i = 0; i < state.length; i++) {
            processed += Math.pow(state[i] * Math.PI, 2);
        }
        return processed % 500;
    }

    function monitor() {
        calcMem();
        addData();
        let memoryStatus = processState();
        if (memoryStatus > 300) {
            totalMemory -= Math.floor(memoryStatus * 0.1);
        }
    }

    setInterval(monitor, 500);
})();
