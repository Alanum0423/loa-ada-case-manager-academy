const FMLA_CALCULATORS = {
  qualifyingHours(hours = {}) {
    const regularWorked = Number(hours.regularWorked) || 0;
    const overtimeWorked = Number(hours.overtimeWorked) || 0;
    return regularWorked + overtimeWorked;
  },

  workweekFraction(leaveHours, scheduledWorkweek) {
    const leave = Number(leaveHours);
    const workweek = Number(scheduledWorkweek);

    if (
      !Number.isFinite(leave) ||
      !Number.isFinite(workweek) ||
      workweek <= 0
    ) {
      return null;
    }

    return leave / workweek;
  },

  round(value, decimals = 3) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  },

  rollingBackwardAvailable(totalEntitlement, leaveUsed) {
    const entitlement = Number(totalEntitlement) || 0;
    const used = Number(leaveUsed) || 0;

    return Math.max(0, entitlement - used);
  },

  hoursToWorkweeks(hours, scheduledWorkweek) {
    return this.workweekFraction(hours, scheduledWorkweek);
  },

  workweeksToHours(workweeks, scheduledWorkweek) {
    const weeks = Number(workweeks);
    const workweek = Number(scheduledWorkweek);

    if (
      !Number.isFinite(weeks) ||
      !Number.isFinite(workweek) ||
      workweek <= 0
    ) {
      return null;
    }

    return weeks * workweek;
  },

  meetsHoursRequirement(hoursWorked, requiredHours = 1250) {
    return Number(hoursWorked) >= Number(requiredHours);
  },

  compareWorkweeks(leaveHours, workweeks = []) {
    return workweeks.map(schedule => {
      const fraction = this.workweekFraction(
        leaveHours,
        schedule
      );

      return {
        workweek: schedule,
        fraction: this.round(fraction, 3)
      };
    });
  }
};
