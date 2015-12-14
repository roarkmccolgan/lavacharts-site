<?php

namespace Khill\Lavacharts\Traits;

<<<<<<< HEAD
use \Khill\Lavacharts\Utils;
=======

>>>>>>> origin/3.0

trait ThemeTrait
{
    /**
     * A theme is a set of predefined option values that work together to achieve a specific chart
     * behavior or visual effect.
     *
     * Currently only one theme is available:
     *  'maximized' - Maximizes the area of the chart, and draws the legend and all of the
     *                labels inside the chart area. Sets the following options:
     *
     * chartArea: {width: '100%', height: '100%'},
     * legend: {position: 'in'},
     * titlePosition: 'in', axisTitlesPosition: 'in',
     * hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'}
     *
     * @param  string $theme
     * @throws \Khill\Lavacharts\Exceptions\InvalidConfigValue
     * @return \Khill\Lavacharts\Charts\Chart
     */
    public function theme($theme)
    {
        $values = [
            'maximized'
        ];

<<<<<<< HEAD
        if (in_array($theme, $values, true) === false) {
            throw $this->invalidConfigValue(
                __FUNCTION__,
                'string',
                'must be one of '.Utils::arrayToPipedString($values)
            );
        }

        return $this->addOption([__FUNCTION__ => $theme]);
=======
        return $this->setStringInArrayOption(__FUNCTION__, $theme, $values);
>>>>>>> origin/3.0
    }
}
