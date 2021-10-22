import { std } from "mathjs";

export function getStatsStdDeviation(players) {
  let stats = {
    gp: [],
    mpg: [],
    fg: [],
    ft: [],
    thrPt: [],
    pts: [],
    reb: [],
    ast: [],
    stl: [],
    blk: [],
    to: [],
    toNormalized: [],
  };

  let statTotals = {
    gp: 0,
    mpg: 0,
    fg: 0,
    ft: 0,
    thrPt: 0,
    pts: 0,
    reb: 0,
    ast: 0,
    stl: 0,
    blk: 0,
    to: 0,
    toNormalized: 0,
  };

  players.forEach((item) => {
    stats.gp.push(item.gp);
    stats.mpg.push(item.mpg);
    stats.fg.push(item.fg);
    stats.ft.push(item.ft);
    stats.thrPt.push(item.thrPt);
    stats.pts.push(item.pts);
    stats.reb.push(item.reb);
    stats.ast.push(item.ast);
    stats.stl.push(item.stl);
    stats.blk.push(item.blk);
    stats.to.push(item.to);

    statTotals.gp += parseFloat(item.gp);
    statTotals.mpg += parseFloat(item.mpg);
    statTotals.fg += parseFloat(item.fg);
    statTotals.ft += parseFloat(item.ft);
    statTotals.thrPt += parseFloat(item.thrPt);
    statTotals.pts += parseFloat(item.pts);
    statTotals.reb += parseFloat(item.reb);
    statTotals.ast += parseFloat(item.ast);
    statTotals.stl += parseFloat(item.stl);
    statTotals.blk += parseFloat(item.blk);
    statTotals.to += parseFloat(item.to);
  });

  const minTo = Math.min(...stats.to);
  const maxTo = Math.max(...stats.to);

  stats.to = stats.to.map((to) => {
    return maxTo + minTo - to;
  });

  /*
  const stdDevGp = std(stats.gp);
  const stdDevMpg = std(stats.mpg);
  const stdDevFg = std(stats.fg);
  const stdDevFt = std(stats.ft);
  const stdDevThrPt = std(stats.thrPt);
  const stdDevPts = std(stats.pts);
  const stdDevReb = std(stats.reb);
  const stdDevAst = std(stats.ast);
  const stdDevStl = std(stats.stl);
  const stdDevBlk = std(stats.blk);
  const stdDevTo = std(stats.to);

  const avgGp = statTotals.gp / players.length;
  const avgMpg = statTotals.mpg / players.length;
  const avgFg = statTotals.fg / players.length;
  const avgFt = statTotals.ft / players.length;
  const avgThrPt = statTotals.thrPt / players.length;
  const avgPts = statTotals.pts / players.length;
  const avgReb = statTotals.reb / players.length;
  const avgAst = statTotals.ast / players.length;
  const avgStl = statTotals.stl / players.length;
  const avgBlk = statTotals.blk / players.length;
  const avgTo = statTotals.to / players.length;
	*/

  return {
    min: {
      to: minTo,
    },
    max: {
      to: maxTo,
    },
    stdDev: {
      gp: std(stats.gp),
      mpg: std(stats.mpg),
      fg: std(stats.fg),
      ft: std(stats.ft),
      thrPt: std(stats.thrPt),
      pts: std(stats.pts),
      reb: std(stats.reb),
      ast: std(stats.ast),
      stl: std(stats.stl),
      blk: std(stats.blk),
      to: std(stats.to),
    },
    average: {
      gp: statTotals.gp / players.length,
      mpg: statTotals.mpg / players.length,
      fg: statTotals.fg / players.length,
      ft: statTotals.ft / players.length,
      thrPt: statTotals.thrPt / players.length,
      pts: statTotals.pts / players.length,
      reb: statTotals.reb / players.length,
      ast: statTotals.ast / players.length,
      stl: statTotals.stl / players.length,
      blk: statTotals.blk / players.length,
      to: statTotals.to / players.length,
    },
  };
}

export function getZPercent(value, average, stdDev) {
  const z = (value - average) / stdDev;

  // z == number of standard deviations from the mean

  // if z is greater than 6.5 standard deviations from the mean the
  // number of significant digits will be outside of a reasonable range

  if (z < -6.5) {
    return 0.0;
  }

  if (z > 6.5) {
    return 1.0;
  }

  var factK = 1;
  var sum = 0;
  var term = 1;
  var k = 0;
  var loopStop = Math.exp(-23);

  while (Math.abs(term) > loopStop) {
    term =
      (((0.3989422804 * Math.pow(-1, k) * Math.pow(z, k)) /
        (2 * k + 1) /
        Math.pow(2, k)) *
        Math.pow(z, k + 1)) /
      factK;
    sum += term;
    k++;
    factK *= k;
  }

  sum += 0.5;

  return parseInt(sum * 100);
}
