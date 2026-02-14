/* ============================================
   Cliff Timer - JavaScript Timer and Physics Engine
   ============================================ */

/**
 * Physics Constants
 * g = gravitational acceleration (m/s²)
 * Formula: h = (1/2) * g * t²
 * This calculates the height of a cliff based on the free-fall time
 */
const GRAVITY = 9.81; // m/s² (Earth's surface)

/**
 * Timer State Management
 */
const timerState = {
    isRunning: false,
    startTime: null,
    elapsedTime: 0,
    animationFrameId: null
};

/**
 * DOM Elements
 */
const timerDisplay = document.getElementById('timerDisplay');
const heightValue = document.getElementById('heightValue');
const controlButton = document.getElementById('controlButton');

/**
 * Initialize: Add event listener to the control button
 */
document.addEventListener('DOMContentLoaded', function() {
    controlButton.addEventListener('click', handleButtonClick);
    updateDisplay();
});

/**
 * Handle Button Click Events
 * Button has three states:
 * 1. Start Timer (initial state)
 * 2. Stop Timer (while running)
 * 3. Reset (after stopping)
 */
function handleButtonClick() {
    if (!timerState.isRunning && timerState.elapsedTime === 0) {
        // State: Start Timer
        startTimer();
    } else if (timerState.isRunning) {
        // State: Stop Timer and Calculate
        stopTimer();
    } else {
        // State: Reset
        resetTimer();
    }
}

/**
 * Start the Timer
 * Records the start time and begins rendering loop
 */
function startTimer() {
    timerState.isRunning = true;
    timerState.startTime = performance.now();
    controlButton.textContent = 'Stop Timer';
    
    // Begin animation loop for smooth updates
    updateTimer();
}

/**
 * Stop the Timer
 * Calculates the height based on elapsed time
 * Switches button state to "Reset"
 */
function stopTimer() {
    timerState.isRunning = false;
    
    if (timerState.animationFrameId) {
        cancelAnimationFrame(timerState.animationFrameId);
    }
    
    // Calculate height using physics formula
    calculateHeight();
    
    // Update button text
    controlButton.textContent = 'Reset';
}

/**
 * Reset the Timer
 * Clears all values and returns to initial state
 */
function resetTimer() {
    timerState.isRunning = false;
    timerState.startTime = null;
    timerState.elapsedTime = 0;
    
    if (timerState.animationFrameId) {
        cancelAnimationFrame(timerState.animationFrameId);
    }
    
    controlButton.textContent = 'Start Timer';
    updateDisplay();
}

/**
 * Update Timer Display
 * Uses requestAnimationFrame for smooth, efficient updates
 * Only updates when timer is running
 */
function updateTimer() {
    if (timerState.isRunning) {
        const currentTime = performance.now();
        timerState.elapsedTime = (currentTime - timerState.startTime) / 1000; // Convert to seconds
        
        updateDisplay();
        
        // Schedule next animation frame
        timerState.animationFrameId = requestAnimationFrame(updateTimer);
    }
}

/**
 * Update Display
 * Refreshes the timer text on the screen
 */
function updateDisplay() {
    // Format time to 2 decimal places (e.g., 1.25 s)
    const formattedTime = timerState.elapsedTime.toFixed(2);
    timerDisplay.textContent = `${formattedTime} s`;
}

/**
 * Calculate Height Using Free-Fall Physics
 * 
 * Formula: h = (1/2) * g * t²
 * 
 * Where:
 *   h = height in meters
 *   g = acceleration due to gravity (9.81 m/s²)
 *   t = time in seconds
 * 
 * Assumptions:
 *   - Object dropped from rest (v0 = 0)
 *   - No air resistance
 *   - Constant gravity
 */
function calculateHeight() {
    const t = timerState.elapsedTime; // Time in seconds
    
    // Apply physics formula: h = (1/2) * g * t²
    const height = (0.5 * GRAVITY * t * t);
    
    // Format and display height to 1 decimal place
    const formattedHeight = height.toFixed(1);
    heightValue.textContent = `Height: ${formattedHeight} m`;
}

/**
 * Optional Enhancement: Prevent accidental interactions
 * Disables double-tap zoom on mobile devices
 */
document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });
