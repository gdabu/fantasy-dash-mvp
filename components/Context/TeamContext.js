import React, { useContext, useEffect, useMemo, useState } from "react";

import { HIGHS as LEAGUE_HIGHS } from "../../data/stats";
import { getStatsStdDeviation, getZPercent } from "../../util/calculations";

const TeamContext = React.createContext();
const TeamAddPlayerContext = React.createContext();
const TeamRemovePlayerContext = React.createContext();
const TeamOverallScoreContext = React.createContext();
const TeamContextStats = React.createContext();

import DATA_PLAYERS from "../../data/players";

// useEffect(() => {
//   getStatsStdDeviation(DATA_PLAYERS);
// }, []);

export function useTeamContext() {
  return useContext(TeamContext);
}

export function useTeamAdd() {
  return useContext(TeamAddPlayerContext);
}

export function useTeamRemove() {
  return useContext(TeamRemovePlayerContext);
}

export function useTeamStatsContext() {
  return useContext(TeamContextStats);
}

export function useTeamOverallScoreContext() {
  return useContext(TeamOverallScoreContext);
}

export default function TeamProvider({ children }) {
  const [team, setTeam] = useState([]);

  function addPlayer(player) {
    setTeam([...team, player]);
  }

  function removePlayer(playerToBeRemoved) {
    const updatedRoster = team.filter((teamPlayer) => {
      return playerToBeRemoved.name !== teamPlayer.name;
    });

    setTeam(updatedRoster);
  }

  const [stats, setStats] = useState({});
  const [overallScore, setOverallScore] = useState(0);

  function getAverages(roster) {
    let pointsTotal = 0,
      threePtsTotal = 0,
      stealsTotal = 0,
      assistsTotal = 0,
      blocksTotal = 0,
      fieldGoalPctTotal = 0,
      freeThrowPctTotal = 0,
      reboundsTotal = 0,
      turnOversTotal = 0,
      turnOversNormalizedTotal = 0,
      pointsAverage = 0,
      threePtsAverage = 0,
      stealsAverage = 0,
      assistsAverage = 0,
      blocksAverage = 0,
      fieldGoalPctAverage = 0,
      freeThrowPctAverage = 0,
      reboundsAverage = 0,
      turnOversAverage = 0,
      turnOversNormalizedAverage = 0;
    const rosterSize = roster.length;

    roster.forEach((player) => {
      pointsTotal += parseFloat(player.pts);
      threePtsTotal += parseFloat(player.thrPt);
      stealsTotal += parseFloat(player.stl);
      assistsTotal += parseFloat(player.ast);
      blocksTotal += parseFloat(player.blk);
      fieldGoalPctTotal += parseFloat(player.fg);
      freeThrowPctTotal += parseFloat(player.ft);
      reboundsTotal += parseFloat(player.reb);
      turnOversTotal += parseFloat(player.to);
      turnOversNormalizedTotal += parseFloat(
        leagueCalculations.min.to + leagueCalculations.max.to - player.to
      );

      pointsAverage = (pointsTotal / rosterSize).toFixed(1);
      threePtsAverage = (threePtsTotal / rosterSize).toFixed(1);
      stealsAverage = (stealsTotal / rosterSize).toFixed(1);
      assistsAverage = (assistsTotal / rosterSize).toFixed(1);
      blocksAverage = (blocksTotal / rosterSize).toFixed(1);
      fieldGoalPctAverage = (fieldGoalPctTotal / rosterSize).toFixed(2);
      freeThrowPctAverage = (freeThrowPctTotal / rosterSize).toFixed(2);
      reboundsAverage = (reboundsTotal / rosterSize).toFixed(1);
      turnOversAverage = (turnOversTotal / rosterSize).toFixed(1);
      turnOversNormalizedAverage = (
        turnOversNormalizedTotal / rosterSize
      ).toFixed(1);
    });

    setStats({
      pts: pointsAverage,
      thrPt: threePtsAverage,
      stl: stealsAverage,
      ast: assistsAverage,
      blk: blocksAverage,
      fg: fieldGoalPctAverage,
      ft: freeThrowPctAverage,
      reb: reboundsAverage,
      to: turnOversAverage,

      ptsScore:
        pointsAverage === 0
          ? 0
          : getZPercent(
              pointsAverage,
              leagueCalculations.average.pts,
              leagueCalculations.stdDev.pts
            ),
      thrPtScore:
        threePtsAverage === 0
          ? 0
          : getZPercent(
              threePtsAverage,
              leagueCalculations.average.thrPt,
              leagueCalculations.stdDev.thrPt
            ),
      stlScore:
        stealsAverage === 0
          ? 0
          : getZPercent(
              stealsAverage,
              leagueCalculations.average.stl,
              leagueCalculations.stdDev.stl
            ),
      astScore:
        assistsAverage === 0
          ? 0
          : getZPercent(
              assistsAverage,
              leagueCalculations.average.ast,
              leagueCalculations.stdDev.ast
            ),
      blkScore:
        blocksAverage === 0
          ? 0
          : getZPercent(
              blocksAverage,
              leagueCalculations.average.blk,
              leagueCalculations.stdDev.blk
            ),
      fgScore:
        fieldGoalPctAverage === 0
          ? 0
          : getZPercent(
              fieldGoalPctAverage,
              leagueCalculations.average.fg,
              leagueCalculations.stdDev.fg
            ),
      ftScore:
        freeThrowPctAverage === 0
          ? 0
          : getZPercent(
              freeThrowPctAverage,
              leagueCalculations.average.ft,
              leagueCalculations.stdDev.ft
            ),

      rebScore:
        reboundsAverage === 0
          ? 0
          : getZPercent(
              reboundsAverage,
              leagueCalculations.average.reb,
              leagueCalculations.stdDev.reb
            ),
      toScore: Math.min(
        turnOversNormalizedAverage === 0
          ? 0
          : getZPercent(
              turnOversNormalizedAverage,
              leagueCalculations.average.to,
              leagueCalculations.stdDev.to
            )
      ),
    });
  }

  useEffect(() => {
    getAverages(team);
  }, [team]);

  useEffect(() => {
    const updatedScore =
      (parseFloat(stats.ptsScore) +
        parseFloat(stats.thrPtScore) +
        parseFloat(stats.stlScore) +
        parseFloat(stats.astScore) +
        parseFloat(stats.blkScore) +
        parseFloat(stats.fgScore) +
        parseFloat(stats.ftScore) +
        parseFloat(stats.rebScore) +
        parseFloat(stats.toScore)) /
      9;

    setOverallScore(parseInt(updatedScore));
  }, [stats]);

  const [leagueCalculations, setLeagueCalculations] = useState(
    getStatsStdDeviation(DATA_PLAYERS)
  );

  return (
    <TeamContext.Provider value={team}>
      <TeamContextStats.Provider value={stats}>
        {/* look into usereducer to prevent having to create a provider per function */}
        <TeamOverallScoreContext.Provider value={overallScore}>
          <TeamAddPlayerContext.Provider value={addPlayer}>
            <TeamRemovePlayerContext.Provider value={removePlayer}>
              {children}
            </TeamRemovePlayerContext.Provider>
          </TeamAddPlayerContext.Provider>
        </TeamOverallScoreContext.Provider>
      </TeamContextStats.Provider>
    </TeamContext.Provider>
  );
}
