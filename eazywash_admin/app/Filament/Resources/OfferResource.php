<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OfferResource\Pages;
use App\Filament\Resources\OfferResource\RelationManagers;
use App\Filament\Roles;
use Filament\Resources\Forms\Components;
use Filament\Resources\Forms\Components\Toggle;
use Filament\Resources\Forms\Form;
use Filament\Resources\Resource;
use Filament\Resources\Tables\Columns;
use Filament\Resources\Tables\Filter;
use Filament\Resources\Tables\Table;

class OfferResource extends Resource
{
    public static $icon = 'heroicon-o-collection';

    public static function form(Form $form)
    {
        return $form
            ->schema([
                Components\TextInput
                    ::make('name')->autofocus()->required(),
                Components\TextInput
                    ::make('promo_code')->required(),
                Components\Textarea
                    ::make('about')->required(),
                Toggle
                    ::make('is_featured'),
            ]);
    }

    public static function table(Table $table)
    {
        return $table
            ->columns([
                Columns\Text
                    ::make('name')->primary(),
                Columns\Text
                    ::make('promo_code'),
                Columns\Boolean
                    ::make('is_featured'),
            ])
            ->filters([
                //
            ]);
    }

    public static function relations()
    {
        return [
            //
        ];
    }

    public static function routes()
    {
        return [
            Pages\ListOffers::routeTo('/', 'index'),
            Pages\CreateOffer::routeTo('/create', 'create'),
            Pages\EditOffer::routeTo('/{record}/edit', 'edit'),
        ];
    }
}
