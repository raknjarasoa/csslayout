import React, { useEffect } from 'react';

import Pattern from '../constants/Pattern';
import CoverCard from './CoverCard';
import Heading from './Heading';

interface RelatedPatternsProps {
    patterns: Pattern[];
}

const RelatedPatterns: React.FC<RelatedPatternsProps> = ({ patterns }) => {
    return (
        <section>
            <Heading title="Related patterns" />

            <div className="flex flex-wrap items-start pa4">
                {
                    patterns.map((pattern) => <CoverCard key={pattern} pattern={pattern} />)
                }
            </div>
        </section>
    );
};

export default RelatedPatterns;