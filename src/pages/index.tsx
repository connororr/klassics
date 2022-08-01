import * as React from "react"
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// styles
const pageStyles = {
  color: "#232129",
  paddingLeft: 30,
  fontFamily: "'PlusJakartaSans-ExtraBold',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
  fontSize: `25px`
}

const fontBold = {
  fontWeight: 'bold'
}

const marginBottom40 = {
  marginBottom: `40px`
}

function createData(name: string, 
    teams: string[], 
    mvp: string, 
    defensivePlayer: string,
    sixthMan: string,
    coach: string,
    rookie: string,
    mip: string): any {
        return {name, teams, mvp, defensivePlayer, sixthMan, coach, rookie, mip }
}

const alexTeams: string[] = ['Nets', 'Hornets','Hawks', 'Clippers', 'Lakers', 'Rockets'];
const simonTeams: string[] = ['76ers', 'Raptors', 'Cavs', 'Nuggets', 'Mavs', 'Spurs'];
const connorTeams: string[] = ['Suns', 'Blazers', 'Pelicans', 'Bucks', 'Pacers', 'Wizards'];
const lokgeiTeams: string[] = ['Warriors', 'Heat', 'Kings', 'Thunder', 'Celtics', 'Pistons'];
const eugeneTeams: string[] = ['Jazz', 'Bulls', 'Knicks', 'Magic', 'Grizzlies', 'Wolves'];

const picks: any = [
    createData('Alex', alexTeams, 'KD', 'AD', 'Harrell', 'Steve Kerr', 'Cade', 'Tyler Herro'),
    createData('Simon', simonTeams, 'Jokic', 'Bam', 'Carmelo', 'Bickerstaff', 'Scottie Barnes', 'Ant Edwards'),
    createData('Connor', connorTeams, 'Giannis', 'Gobert', 'Cam Reddish', 'Billy Donovan', 'Jalen Green', 'Miles Bridges'),
    createData('Lokgei', lokgeiTeams, 'Steph', 'Myles Turner', 'Jordan Clarkson', 'Doc Rivers', 'Duarte', 'Ja'),
    createData('Eugene', eugeneTeams, 'PG13', 'Caruso', 'Tyler Herro', 'Erik Spo', 'Evan Mobley','Jordan Poole')
]

// TODO: turn the tableRows into TableColumns

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Klassics' NBA Picks</title>
      <h1>Klassics</h1>
      <Divider style={marginBottom40} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell><b>Alex</b></TableCell>
              <TableCell><b>Simon</b></TableCell>
              <TableCell><b>Connor</b></TableCell>
              <TableCell><b>Lokgei</b></TableCell>
              <TableCell><b>Eugene</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover="true">
              <TableCell><b>Champs</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.teams.map((team) => (
                  <div>{team}<br/></div>
                ))}</TableCell>
              ))}
            </TableRow>
            <TableRow hover="true">
              <TableCell><b>MVP</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.mvp}</TableCell>
              ))}
            </TableRow>
            <TableRow hover="true">
              <TableCell><b>Defensive Player</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.defensivePlayer}</TableCell>
              ))}
            </TableRow>
            <TableRow hover="true">
              <TableCell><b>Sixth Man</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.sixthMan}</TableCell>
              ))}
            </TableRow>
            <TableRow hover="true">
              <TableCell><b>Coach</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.coach}</TableCell>
              ))}
            </TableRow>
            <TableRow hover="true">
              <TableCell><b>Rookie</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.rookie}</TableCell>
              ))}
            </TableRow>
            <TableRow hover="true">
              <TableCell><b>MIP</b></TableCell>
              {picks.map((pick) => (
                <TableCell>{pick.mip}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  )
}

export default IndexPage
