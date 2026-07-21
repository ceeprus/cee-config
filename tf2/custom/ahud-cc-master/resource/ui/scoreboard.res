#base "../../cfg/ahudcc/hud_scoreboard.txt"
#base "scoreboard_12v12.res"

"Resource/UI/Scoreboard.res"
{
	// Column rebalance: ahud lists are 280 wide vs Valve's 310 with Valve's column
	// widths (~272 total), so on 24+ player servers the scrollbar overlapped
	// ping/score/class. Trim the medal area left of the avatar instead of the name:
	// avatar shifts left into the dead space, names stay full length, and ~35 units
	// of right margin keep the scrollbar clear. Revert = delete these five lines.
	"medal_column_width"	"18"	// Valve pairing restored - 1/1 probe clipped casual rank badges
	"medal_width"			"28"
	"spacer"				"3"		// was 5
	"nemesis_width"			"10"	// was 15
	"avatar_width"			"14"	// was 28: icon fills column x row-height (13), square
	"name_width"			"140"	// was 118
	"ping_width"			"25"	// was 15; header clips to "Pi..." in code regardless of width

	// Widen both lists 280 -> 310 into the unused outer margins. Red bar is pinned
	// to Blue's right corner so it follows automatically; RedPlayerList stays at c0.
	"BlueScoreBG"
	{
		"xpos"	"c-310"
		"wide"	"310"
	}
	"RedScoreBG"
	{
		"wide"	"310"
	}
	"BluePlayerList"
	{
		"xpos"	"c-310"
		"wide"	"310"
	}
	"RedPlayerList"
	{
		"wide"	"310"
	}
	// Backing box follows the 620-wide layout (was 560)
	"ScoreboardBackground"
	{
		"wide"	"620"
	}
	"LocalPlayerStatsPanel"
	{
		"wide"	"620"
		"StatsPanelBG"
		{
			"wide"	"f0"	// was 560 - the visible dark box; f0 = always fill parent
			"bgcolor_override"	"0 0 0 215"	// dark in all modes (ahud shipped white for MvM)
			if_mvm
			{
				"bgcolor_override"	"0 0 0 215"
			}
		}
		// MvM scoreboard is native 560 wide at c-280; keep the stats strip matching it.
		// Pin x-offset is inverted (positive = left), hence -30 to shift right.
		if_mvm
		{
			"xpos"	"-30"
			"wide"	"560"
		}

		// ahud ships these labels black-on-white for MvM; box is dark now, so text
		// goes white. Placed here because scoreboard_12v12.res serves stale from cache.
		"KillsLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Kills2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"Deaths2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"AssistsLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Assists2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"DestructionLabel"	{ if_mvm { "fgcolor" "ahudWhite" } }
		"Destruction2"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"CapturesLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Captures2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"DefensesLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Defenses2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"DominationLabel"	{ if_mvm { "fgcolor" "ahudWhite" } }
		"Domination2"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"RevengeLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Revenge2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"HealingLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Healing2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"InvulnLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Invuln2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"TeleportsLabel"	{ if_mvm { "fgcolor" "ahudWhite" } }
		"Teleports2"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"HeadshotsLabel"	{ if_mvm { "fgcolor" "ahudWhite" } }
		"Headshots2"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"BackstabsLabel"	{ if_mvm { "fgcolor" "ahudWhite" } }
		"Backstabs2"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"BonusLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Bonus2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"SupportLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Support2"			{ if_mvm { "fgcolor" "ahudWhite" } }
		"DamageLabel"		{ if_mvm { "fgcolor" "ahudWhite" } }
		"Damage2"			{ if_mvm { "fgcolor" "ahudWhite" } }
	}
	"LocalPlayerDuelStatsPanel"
	{
		"wide"	"620"
		"DuelScoreboardBackground"
		{
			"wide"	"f0"
		}
	}
	"Spectators"
	{
		"wide"	"620"
	}
	"SpectatorsInQueue"
	{
		"wide"	"620"
	}

	// Map name bottom-right: 116-wide west-aligned label clipped long names
	// ("TRADE PLAZA 2"). Wider + east-aligned = end of name always visible,
	// grows leftward from the pinned right corner. Clear of the Bonus column.
	"MapName"
	{
		"wide"			"170"
		"textAlignment"	"east"
		if_mvm
		{
			"fgcolor"	"ahudWhite"
		}
	}
}